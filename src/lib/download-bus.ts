// Tiny global event bus for opening the "coming soon" modal from anywhere.
type Kind = "android" | "ios" | "beta";
type Listener = (k: Kind) => void;
const listeners = new Set<Listener>();

export function openDownload(k: Kind) {
  listeners.forEach((l) => l(k));
}
export function onDownload(l: Listener) {
  listeners.add(l);
  return () => listeners.delete(l);
}
