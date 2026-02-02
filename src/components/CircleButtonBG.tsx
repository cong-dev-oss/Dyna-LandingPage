import { FunctionComponent } from 'react';
import './CircleButtonBG.css';

export type CircleButtonBGType = {
  className?: string;
  
  /** Variant props */
  lightTheme?: boolean;
}



const CircleButtonBG: FunctionComponent<CircleButtonBGType> = ({ className="", lightTheme=true }) => {
  return (
    <div className={`circle-button-bg ${className}`} data-lightTheme={lightTheme}>
      <div className="true5" />
    </div>);
};

export default CircleButtonBG ;
