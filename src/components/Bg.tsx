import { FunctionComponent } from 'react';
import TencentTDSQLC3DCN from "./TencentTDSQLC3DCN";
import getAssetPath from '../utils/assetPath';
import './Bg.css';

export type BgType = {
  className?: string;
  property1?: string;
}



const Bg: FunctionComponent<BgType> = ({ className="", property1 }) => {
  return (
    <div className={`background ${className}`}>
      <img className="background-child" alt="" src={getAssetPath("/Rectangle-647@2x.png")} />
      <div className="wrapper-vector">
        <img className="vector-icon" alt="" src={getAssetPath("/Vector.svg")} />
      </div>
      <div className="wrapper-group-39465">
        <img className="wrapper-group-39465-child" alt="" src={getAssetPath("/Group-39465.svg")} />
      </div>
      <img className="background-item" alt="" src={getAssetPath("/Group-39466.svg")} />
      <section className="tencent-tdsql-c-3d-cn-wrapper"><TencentTDSQLC3DCN property1={property1} />
      </section>
    </div>);
};

export default Bg ;
