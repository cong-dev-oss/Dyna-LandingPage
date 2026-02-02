/**
 * Helper function to get correct asset path with base URL
 * Automatically handles GitHub Pages deployment paths
 * 
 * @example
 * getAssetPath('/logo.png') // => '/Dyna-LandingPage/logo.png' in production
 * getAssetPath('/logo.png') // => '/logo.png' in development
 */
export const getAssetPath = (path: string): string => {
  if (!path) return '';
  
  // Remove leading slash for consistent handling
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get base URL from Vite (includes trailing slash)
  const base = import.meta.env.BASE_URL;
  
  // Combine base and path
  return `${base}${cleanPath}`;
};

// Default export for easier imports
export default getAssetPath;
