import { FunctionComponent } from 'react';
import getAssetPath from '../utils/assetPath';
import './Icon1.css';

/**
 * Icon1 - User Avatar Component
 * 
 * Displays a circular user avatar image used in testimonials
 * 
 * @param className - Optional additional CSS classes
 * @param alt - Alternative text for the avatar image (for accessibility)
 */
export type Icon1Type = {
  className?: string;
  alt?: string;
}

const Icon1: FunctionComponent<Icon1Type> = ({ 
  className = "",
  alt = "User avatar"
}) => {
  return (
    <img 
      className={`content-block-image ${className}`} 
      alt={alt} 
      src={getAssetPath("/Content-Block-Image.svg")} 
    />
  );
};

export default Icon1;
