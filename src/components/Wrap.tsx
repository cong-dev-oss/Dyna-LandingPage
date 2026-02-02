import { FunctionComponent } from 'react';
import './Wrap.css';

export type WrapType = {
  className?: string;
  
  /** Variant props */
  lightMode?: boolean;
}



const Wrap: FunctionComponent<WrapType> = ({ className="", lightMode=true }) => {
  return (
    <div className={`wrap ${className}`} data-lightMode={lightMode}>
      <div className="true4" />
    </div>);
};

export default Wrap ;
