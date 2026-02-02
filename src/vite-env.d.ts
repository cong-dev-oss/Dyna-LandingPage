/// <reference types="vite/client" />

// Declare global helper for asset paths
declare global {
  interface Window {
    getAssetPath: (path: string) => string;
  }
}

export {};
