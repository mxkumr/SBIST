"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AdmissionEnquiryModal } from "@/components/admission/AdmissionEnquiryModal";

const STORAGE_KEY = "sbist-admission-enquiry-seen";

type AdmissionEnquiryContextValue = {
  openAdmissionEnquiry: () => void;
  closeAdmissionEnquiry: () => void;
};

const AdmissionEnquiryContext = createContext<AdmissionEnquiryContextValue | null>(null);

export function useAdmissionEnquiry() {
  const ctx = useContext(AdmissionEnquiryContext);
  if (!ctx) {
    throw new Error("useAdmissionEnquiry must be used within AdmissionEnquiryProvider");
  }
  return ctx;
}

/** Safe hook for optional usage — returns null outside provider */
export function useOptionalAdmissionEnquiry() {
  return useContext(AdmissionEnquiryContext);
}

export function AdmissionEnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const openAdmissionEnquiry = useCallback(() => {
    setOpen(true);
  }, []);

  const closeAdmissionEnquiry = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname.startsWith("/launch")) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
  }, []);

  const value = useMemo(
    () => ({ openAdmissionEnquiry, closeAdmissionEnquiry }),
    [openAdmissionEnquiry, closeAdmissionEnquiry],
  );

  return (
    <AdmissionEnquiryContext.Provider value={value}>
      {children}
      {enabled && (
        <>
          <button
            type="button"
            onClick={openAdmissionEnquiry}
            className="fixed right-0 top-1/2 z-[90] hidden -translate-y-1/2 rounded-l-md bg-accent px-2.5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-colors hover:bg-accent-hover sm:block"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            aria-label="Open admission enquiry form"
          >
            Admission Enquiry
          </button>

          <button
            type="button"
            onClick={openAdmissionEnquiry}
            className="fixed bottom-4 right-4 z-[90] max-w-[calc(100vw-2rem)] rounded-full bg-accent px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-colors hover:bg-accent-hover sm:hidden"
            aria-label="Open admission enquiry form"
          >
            Admission Enquiry
          </button>

          <AdmissionEnquiryModal open={open} onClose={closeAdmissionEnquiry} />
        </>
      )}
    </AdmissionEnquiryContext.Provider>
  );
}
