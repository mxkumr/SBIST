/** Routes with implemented pages - update when new pages are added */
export const BUILT_ROUTES = new Set([
  "/",
  "/about",
  "/about/leadership",
  "/academics",
  "/departments",
  "/contact",
  "/careers",
  "/campus-life",
  "/sbsb",
  "/sbiol",
  "/under-construction",
  "/site-under-construction",
]);

export function isBuiltRoute(pathname: string): boolean {
  if (BUILT_ROUTES.has(pathname)) return true;
  if (pathname.startsWith("/departments/")) return true;
  return false;
}
