import { FunctionComponent, useMemo, type CSSProperties } from 'react';
import './Avatar.css';

export type AvatarType = {
  className?: string;
  contrastBorder?: boolean;
  
  /** Variant props */
  placeholder?: boolean;
  size?: "lg" | "xl";
  statusIcon?: boolean;
  text?: boolean;
  
  /** Style props */
  avatarMarginLeft?: CSSProperties['marginLeft'];
  avatarHeight?: CSSProperties['height'];
  avatarWidth?: CSSProperties['width'];
}



const Avatar: FunctionComponent<AvatarType> = ({ className="", placeholder=false, size="xs", statusIcon=false, text=false, contrastBorder=true, avatarMarginLeft, avatarHeight, avatarWidth }) => {
  const avatarStyle: CSSProperties = useMemo(() => {
                  return {
                    marginLeft: avatarMarginLeft,
      height: avatarHeight,
      width: avatarWidth
                  };
                }, [avatarMarginLeft, avatarHeight, avatarWidth]);
              
  return (
    <div className={`root3 ${className}`} data-placeholder={placeholder} data-size={size} data-statusIcon={statusIcon} data-text={text} style={avatarStyle}>
      {!!contrastBorder && (<div className="contrast-border2" />)}
    </div>);
};

export default Avatar ;
