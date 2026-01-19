/**
 * Check if a public asset exists
 */
export function getPublicAsset(path: string): string {
  if (!path.startsWith("/")) {
    throw new Error(`❌ Asset path must start with '/'. Got: ${path}`);
  }

  const assetUrl =
    typeof window !== "undefined" ? `${window.location.origin}${path}` : path;

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

// 👇 Add this
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

