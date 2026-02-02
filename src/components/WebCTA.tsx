import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import './WebCTA.css';

export type WebCTAType = {
  className?: string;
  button?: string;
  
  /** Variant props */
  property1?: "Default" | "Variant2";
  
  /** Style props */
  webCTAFlex?: CSSProperties['flex'];
}



const WebCTA: FunctionComponent<WebCTAType> = ({ className="", property1="Default", button, webCTAFlex }) => {
  const webCTAStyle: CSSProperties = useMemo(() => {
                  return {
                    flex: webCTAFlex
                  };
                }, [webCTAFlex]);
              
  return (
    <button className={`root ${className}`} data-property1={property1} style={webCTAStyle}>
      <div className="button">{button}</div>
    </button>);
};

export default WebCTA ;
