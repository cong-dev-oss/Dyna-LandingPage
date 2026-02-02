import { FunctionComponent } from 'react';
import './TabItem.css';

export type TabItemType = {
  className?: string;
  label?: string;
  
  /** Variant props */
  state?: string;
  type?: string;
}



const TabItem: FunctionComponent<TabItemType> = ({ className="", state="Inactive", type="Primary", label="6-Month Plan" }) => {
  return (
    <div className={`root2 ${className}`} data-state={state} data-type={type}>
      <div className="tab">{label}</div>
    </div>);
};

export default TabItem ;
