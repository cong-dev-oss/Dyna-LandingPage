import type { Plugin } from 'vite';

export default function fixPublicAssets(): Plugin {
  return {
    name: 'fix-public-assets',
    enforce: 'pre',
    transform(code, id) {
      // Only process TypeScript/JavaScript files
      if (!id.endsWith('.tsx') && !id.endsWith('.ts') && !id.endsWith('.jsx') && !id.endsWith('.js')) {
        return null;
      }

      // Replace src="/..." with src={`${import.meta.env.BASE_URL}...`}
      // but only for files in public folder (capitalized file names and common extensions)
      const regex = /src=["'](\/([\w-]+\.(?:png|jpg|jpeg|gif|svg|webp|@\dx\.png)))/g;
      
      if (regex.test(code)) {
        code = code.replace(
          /src=(["'])(\/([\w-]+(?:@\dx)?\.(?:png|jpg|jpeg|gif|svg|webp)))\1/g,
          'src={`${import.meta.env.BASE_URL}$3`}'
        );
        return { code, map: null };
      }

      return null;
    },
  };
}
