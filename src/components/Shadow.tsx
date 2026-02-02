import { FunctionComponent } from 'react';
import './Shadow.css';

export type ShadowType = {
  className?: string;
  
  /** Variant props */
  property1?: boolean;
}



const Shadow: FunctionComponent<ShadowType> = ({ className="", property1=true }) => {
  return (
    <div className={`shadow ${className}`} data-property1={property1}>
      <div className="true3" />
    </div>);
};

export default Shadow ;
