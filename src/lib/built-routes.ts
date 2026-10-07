/** Routes with implemented pages — update when new pages are added */
export const BUILT_ROUTES = new Set([
  "/",
  "/about",
  "/about/leadership",
  "/academics",
  "/contact",
  "/careers",
  "/campus-life",
  "/sbsb",
  "/sbiol",
  "/under-construction",
  "/site-under-construction",
]);

export function isBuiltRoute(pathname: string): boolean {
  return BUILT_ROUTES.has(pathname);
}
