import { FunctionComponent } from 'react';
import './BgFoodter.css';

export type BgFoodterType = {
  className?: string;
}



const BgFoodter: FunctionComponent<BgFoodterType> = ({ className="" }) => {
  return (
    <div className={`bg-foodter ${className}`}>
      <div className="background-shape-parent">
        <div className="background-shape" />
        <div className="background-shape2" />
        <div className="background-shape3" />
      </div>
    </div>);
};

export default BgFoodter ;
