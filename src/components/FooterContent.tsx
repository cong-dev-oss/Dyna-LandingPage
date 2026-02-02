import { FunctionComponent } from 'react';
import Logo from "./Logo";
import BgFoodter from "./BgFoodter";
import getAssetPath from '../utils/assetPath';
import './FooterContent.css';

export type FooterContentType = {
  className?: string;
  property1?: "Default" | "Variant2";
  union?: string;
  group?: string;
}



const FooterContent: FunctionComponent<FooterContentType> = ({ className="", property1="Default", union, group }) => {
  return (
    <section className={`footer-content ${className}`}>
      <section className="navigation">
        <div className="navigation2">
          <div className="logo-and-menu"><Logo property1={property1} union={union} group={group} />
            <div className="menu-items">
              <button className="inner7">
                <div className="home-032">
                  <img className="elements-icon11" alt="" src={getAssetPath("/elements.svg")} />
                </div>
                <div className="home2">Home</div>
                <div className="home-032">
                  <img className="elements-icon12" alt="" src={getAssetPath("/elements1.svg")} />
                </div>
              </button>
              <button className="inner7">
                <div className="home-032">
                  <img className="elements-icon11" alt="" src={getAssetPath("/elements2.svg")} />
                </div>
                <div className="home2">About us</div>
                <div className="home-032">
                  <img className="elements-icon12" alt="" src={getAssetPath("/elements1.svg")} />
                </div>
              </button>
              <div className="inner9">
                <div className="home-032">
                  <img className="elements-icon11" alt="" src={getAssetPath("/elements2.svg")} />
                </div>
                <div className="services2">Services</div>
                <div className="home-032">
                  <img className="elements-icon12" alt="" src={getAssetPath("/elements1.svg")} />
                </div>
              </div>
              <div className="inner9">
                <div className="home-032">
                  <img className="elements-icon11" alt="" src={getAssetPath("/elements2.svg")} />
                </div>
                <div className="services2">Projects</div>
                <div className="home-032">
                  <img className="elements-icon12" alt="" src={getAssetPath("/elements1.svg")} />
                </div>
              </div>
              <button className="inner11">
                <div className="home-032">
                  <img className="elements-icon11" alt="" src={getAssetPath("/elements2.svg")} />
                </div>
                <div className="home2">Resources</div>
              </button>
            </div>
          </div>
          <div className="socials">
            <img className="community-icon" loading="lazy" alt="" src={getAssetPath("/Community-icon.svg")} />
            <img className="community-icon" alt="" src={getAssetPath("/Community-icon1.svg")} />
            <img className="community-icon" alt="" src={getAssetPath("/Community-icon2.svg")} />
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="forpeople-stu">@Digital Unicorn. Tous droits réservés.</div>
        <div className="footer-links">
          <div className="forpeople-stu">Whitepaper</div>
          <div className="forpeople-stu">Terms of Services</div>
          <div className="forpeople-stu">Policy</div>
        </div>
      </div><BgFoodter  />
    </section>);
};

export default FooterContent ;
