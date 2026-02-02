import { FunctionComponent } from 'react';
import Icon1 from "./Icon1";
import getAssetPath from '../utils/assetPath';
import './ContentBlock.css';

/**
 * ContentBlock - Testimonial/Feedback Card Component
 * 
 * A visually rich card component displaying user feedback with:
 * - User avatar and rating (5 stars)
 * - Testimonial text
 * - DYNA branding with decorative background
 * - Community feedback section
 * 
 * @param className - Optional additional CSS classes
 */
export type ContentBlockType = {
  className?: string;
  name?: string;
  review?: string;
  feedbackTitle?: string;
  feedbackText?: string;
}

const ContentBlock: FunctionComponent<ContentBlockType> = ({ 
  className = "",
  name = "Casey",
  review = "Dyna m'aide à rester concentré et me fait gagner des heures chaque semaine.",
  feedbackTitle = "Feedback de la communauté",
  feedbackText = "Dyna m'aide à rester concentré et me fait gagner des heures chaque semaine."
}) => {
  return (
    <article className={`content-block ${className}`}>
      {/* Top Section: Visual testimonial card with gradient background */}
      <section className="content-block2">
        {/* User testimonial card */}
        <div className="content-block3">
          <div className="content-block4">
            <Icon1 />
            <div className="content-block-text">
              <h3 className="content-block-name">{name}</h3>
              <div className="content-block-rating" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <img 
                    key={i}
                    className="content-block-star" 
                    loading="lazy" 
                    alt="" 
                    src={getAssetPath("/Content-Block-Star.svg")} 
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="content-block-review">{review}</p>
        </div>
        
        {/* Decorative merged asset background - removed as file doesn't exist */}
        {/* <img 
          className="merged-asset-1-icon" 
          alt="Decorative background" 
          src={getAssetPath("/Content-Block@2x.png")} 
        /> */}
        
        {/* DYNA branding badge */}
        <div className="content-block6">
          <div className="content-block7">
            <div className="content-block-text2" aria-label="DYNA Brand">DYNA</div>
          </div>
        </div>
      </section>
      
      {/* Bottom Section: Community feedback text */}
      <section className="content-block8">
        <h3 className="text">{feedbackTitle}</h3>
        <p className="text2">{feedbackText}</p>
      </section>
    </article>
  );
};

export default ContentBlock;
