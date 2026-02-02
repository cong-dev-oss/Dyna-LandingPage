/**
 * Get asset path with proper base URL handling
 * The BASE_URL is replaced at build time by Vite
 * 
 * @param path - Asset path (e.g., '/logo.png')
 * @returns Transformed asset URL with base path
 */
export const getAssetPath = (path: string): string => {
  if (!path) return '';
  
  // Remove leading slash for consistent handling
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use BASE_URL which Vite will replace at build time
  // @ts-ignore - BASE_URL is defined by Vite
  const base = typeof __BASE_URL__ !== 'undefined' ? __BASE_URL__ : import.meta.env.BASE_URL;
  
  // Combine base and path
  return `${base}${cleanPath}`;
};

export default getAssetPath;
