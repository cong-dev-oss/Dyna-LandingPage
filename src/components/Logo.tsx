import { FunctionComponent } from 'react';
import './Logo.css';

export type LogoType = {
  className?: string;
  union?: string;
  group?: string;
  
  /** Variant props */
  property1?: "Default" | "Variant2";
}



const Logo: FunctionComponent<LogoType> = ({ className="", property1="Default", union, group }) => {
  return (
    <div className={`root4 ${className}`} data-property1={property1}>
      <img className="union-icon" alt="" src={union} />
      <img className="group-icon" alt="" src={group} />
    </div>);
};

export default Logo ;
