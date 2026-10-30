import { previewPathPrefix } from "@/lib/preview-path-prefix";

/** Root-absolute URL, with the path-based preview prefix when the host uses one. */
export function assetUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (typeof window === "undefined") return clean;
  const prefix = previewPathPrefix(window.location.hostname, window.location.pathname) ?? "";
  return `${prefix}${clean}`;
}
