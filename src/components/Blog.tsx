import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import './Blog.css';

export type BlogType = {
  className?: string;
  
  /** Style props */
  frameDivBackgroundImage?: CSSProperties['backgroundImage'];
}



const Blog: FunctionComponent<BlogType> = ({ className="", frameDivBackgroundImage }) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
                  return {
                    backgroundImage: frameDivBackgroundImage
                  };
                }, [frameDivBackgroundImage]);
              
  return (
    <div className={`blog2 ${className}`}>
      <div className="blog-inner" style={frameDivStyle}>
        <div className="product-updates-wrapper">
          <div className="product-updates">Product Updates</div>
        </div>
      </div>
      <div className="sep-23-2025-parent">
        <div className="sep-23-2025">Sep 23, 2025</div>
        <div className="lorem-ipsum-is-placeholder-tex-parent">
          <h3 className="lorem-ipsum-is">Lorem ipsum is placeholder text</h3>
          <div className="lorem-ipsum-is2">Lorem ipsum is placeholder text commonly used in the</div>
        </div>
      </div>
    </div>);
};

export default Blog ;
