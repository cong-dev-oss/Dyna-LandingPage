import { FunctionComponent } from 'react';
import './TencentDBForMariaDB3DCN.css';

export type TencentDBForMariaDB3DCNType = {
  className?: string;
  
  /** Variant props */
  property1?: string;
}



const TencentDBForMariaDB3DCN: FunctionComponent<TencentDBForMariaDB3DCNType> = ({ className="", property1="Default" }) => {
  return (
    <div className={`tencentdb-for-mariadb-3d-cn ${className}`} data-property1={property1}>
      <img className="tencentdb-for-mariadb" loading="lazy" alt="" src="/TencentDB-for-MariaDB@2x.png" />
    </div>);
};

export default TencentDBForMariaDB3DCN ;
