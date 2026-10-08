/** Exact routes with implemented pages — update when new pages are added */
export const BUILT_ROUTES = new Set([
  "/",
  "/about",
  "/about/leadership",
  "/about/faculty",
  "/academics",
  "/admissions",
  "/contact",
  "/careers",
  "/campus-life",
  "/sbsb",
  "/sbiol",
  "/under-construction",
  "/site-under-construction",
]);

/** Prefixes for dynamic or nested live routes */
export const BUILT_ROUTE_PREFIXES = ["/academics/courses/", "/api/"] as const;

export function isBuiltRoute(pathname: string): boolean {
  if (BUILT_ROUTES.has(pathname)) return true;
  return BUILT_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix.slice(0, -1) || pathname.startsWith(prefix),
  );
}
