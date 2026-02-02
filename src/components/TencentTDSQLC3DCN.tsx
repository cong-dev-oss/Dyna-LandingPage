import { FunctionComponent } from 'react';
import './TencentTDSQLC3DCN.css';

export type TencentTDSQLC3DCNType = {
  className?: string;
  
  /** Variant props */
  property1?: string;
}



const TencentTDSQLC3DCN: FunctionComponent<TencentTDSQLC3DCNType> = ({ className="", property1="Default" }) => {
  return (
    <div className={`tencent-tdsql-c-3d-cn ${className}`} data-property1={property1}>
      <img className="tencent-tdsql-c" loading="lazy" alt="" src="/Tencent-TDSQL-C@2x.png" />
    </div>);
};

export default TencentTDSQLC3DCN ;
