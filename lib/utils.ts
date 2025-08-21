/**
 * Check if a public asset exists
 * @param path - path relative to the public folder, e.g. "/fonts/SandyKids.ttf"
 * @returns full URL to the asset (if exists), otherwise throws error
 */
export function getPublicAsset(path: string): string {
  if (!path.startsWith("/")) {
    throw new Error(`❌ Asset path must start with '/'. Got: ${path}`);
  }

  // Construct the URL
  const assetUrl =
    typeof window !== "undefined" ? `${window.location.origin}${path}` : path; // SSR safe

  // During dev, attempt to prefetch to check if the asset exists
  if (typeof window !== "undefined") {
    fetch(path, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          console.error(`⚠️ Asset not found: ${path}`);
        }
      })
      .catch(() => {
        console.error(`⚠️ Error checking asset: ${path}`);
      });
  }

  return assetUrl;
}
