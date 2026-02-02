/**
 * CSS Asset URLs - Set CSS variables for background images
 * This allows CSS to use proper base URLs for GitHub Pages
 */
import getAssetPath from './assetPath';

/**
 * Initialize CSS variables for all background images
 * Call this once when app loads
 */
export const initCSSAssets = () => {
  const root = document.documentElement;
  
  // Set CSS variables for all background images
  root.style.setProperty('--bg-card-image', `url('${getAssetPath('/Card-Image@3x.png')}')`);
  root.style.setProperty('--bg-card-image-1', `url('${getAssetPath('/Card-Image1@3x.png')}')`);
  root.style.setProperty('--bg-card-image-2', `url('${getAssetPath('/Card-Image2@3x.png')}')`);
  root.style.setProperty('--bg-img-02', `url('${getAssetPath('/img-02@3x.png')}')`);
  root.style.setProperty('--bg-image-block', `url('${getAssetPath('/Image-Block@3x.png')}')`);
  root.style.setProperty('--bg-image-block-1', `url('${getAssetPath('/Image-Block1@3x.png')}')`);
  root.style.setProperty('--bg-testimonial-card', `url('${getAssetPath('/Testimonial-Card@3x.png')}')`);
  root.style.setProperty('--bg-content-block', `url('${getAssetPath('/Content-Block@3x.png')}')`);
  root.style.setProperty('--bg-profile-image', `url('${getAssetPath('/Profile-image@3x.png')}')`);
  root.style.setProperty('--bg-avatar-10', `url('${getAssetPath('/Avatar10@3x.png')}')`);
  root.style.setProperty('--bg-avatar', `url('${getAssetPath('/Avatar@3x.png')}')`);
  root.style.setProperty('--bg-avatar-4', `url('${getAssetPath('/Avatar4@3x.png')}')`);
  root.style.setProperty('--bg-frame-2087327364', `url('${getAssetPath('/Frame-2087327364@3x.png')}')`);
};

export default initCSSAssets;
