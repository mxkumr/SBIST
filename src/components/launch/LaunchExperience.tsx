"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CurtainReveal } from "@/components/launch/CurtainReveal";
import { LaunchButton } from "@/components/launch/LaunchButton";
import { LaunchLogo } from "@/components/launch/LaunchLogo";

/** Hardcoded official destination — never accept query redirects */
const LAUNCH_REDIRECT_URL = "https://sbist.edu.in";

type LaunchState = "idle" | "launching" | "opening" | "revealed";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function LaunchExperience() {
  const [state, setState] = useState<LaunchState>("idle");
  const [showWelcome, setShowWelcome] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const redirect = useCallback(() => {
    window.location.href = LAUNCH_REDIRECT_URL;
  }, []);

  const handleDeploy = useCallback(() => {
    if (state !== "idle") return;

    setState("launching");
    const reduced = prefersReducedMotion();

    if (reduced) {
      schedule(() => setState("opening"), 200);
      schedule(() => setState("revealed"), 550);
      schedule(() => setShowWelcome(true), 700);
      schedule(redirect, 1200);
      return;
    }

    // 0.00–0.30s: button shows LAUNCHING...
    // 0.30s: curtains begin opening
    schedule(() => setState("opening"), 300);
    // ~2.0s curtain motion after open starts → revealed ~2.3s from click
    schedule(() => setState("revealed"), 2300);
    // Welcome copy before redirect
    schedule(() => setShowWelcome(true), 2700);
    // Redirect ~3.5s from click
    schedule(redirect, 3500);
  }, [redirect, schedule, state]);

  const busy = state !== "idle";
  const curtainsOpen = state === "opening" || state === "revealed";
  const previewVisible = state === "opening" || state === "revealed";
  const spotlightOn = state === "launching" || curtainsOpen;
  const centerExit = state === "opening" || state === "revealed";

  return (
    <div className="launch-root" role="main" aria-label="SBIST official website launch">
      <div className={`launch-stage${spotlightOn ? " launch-stage--lit" : ""}`} />
      <div className={`launch-spotlight${spotlightOn ? " launch-spotlight--on" : ""}`} />

      <div
        className={`launch-preview${previewVisible ? " launch-preview--visible" : ""}`}
        aria-hidden
      >
        <div className="launch-preview__nav">
          <div className="launch-preview__brand">
            <Image
              src="/images/sbist-logo.jpg"
              alt=""
              width={120}
              height={40}
              priority
            />
            <span>SBIST</span>
          </div>
          <div className="launch-preview__links">
            <span>About</span>
            <span>Academics</span>
            <span>Campus Life</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="launch-preview__hero">
          <p className="launch-preview__hero-title">
            Sree Balaji Institute of Science and Technology
          </p>
          <p className="launch-preview__hero-sub">
            What the World Needs Begins Here - AICTE-approved programmes in engineering,
            management and computer applications.
          </p>
          <div className="launch-preview__accent" />
        </div>
        <div className="launch-preview__strip">
          <div className="launch-preview__card" />
          <div className="launch-preview__card" />
          <div className="launch-preview__card" />
        </div>
      </div>

      <CurtainReveal open={curtainsOpen} />

      <div className={`launch-center${centerExit ? " launch-center--exit" : ""}`}>
        <div className="launch-panel">
          <LaunchLogo />
          <LaunchButton busy={busy} disabled={busy} onDeploy={handleDeploy} />
        </div>
      </div>

      <div
        className={`launch-welcome${showWelcome ? " launch-welcome--show" : ""}`}
        aria-live="polite"
      >
        {showWelcome && <p>Welcome to SBIST</p>}
      </div>
    </div>
  );
}
