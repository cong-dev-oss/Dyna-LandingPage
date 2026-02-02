import { FunctionComponent } from 'react';
import './Avatar1.css';

export type Avatar1Type = {
  className?: string;
  contrastBorder?: boolean;
  
  /** Variant props */
  placeholder?: boolean;
  size?: string;
  statusIcon?: boolean;
  text?: boolean;
}



const Avatar1: FunctionComponent<Avatar1Type> = ({ className="", placeholder=false, size="xs", statusIcon=false, text=false, contrastBorder=true }) => {
  return (
    <div className={`avatar2 ${className}`} data-placeholder={placeholder} data-size={size} data-statusIcon={statusIcon} data-text={text}>
      {!!contrastBorder && (<img className="contrast-border-icon" loading="lazy" alt="" src="/Contrast-border@2x.png" />)}
    </div>);
};

export default Avatar1 ;
