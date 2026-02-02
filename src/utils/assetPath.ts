/**
 * Helper function to get correct asset path with base URL
 * Works correctly in both development and production
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, prepend base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${cleanPath}`;
};
