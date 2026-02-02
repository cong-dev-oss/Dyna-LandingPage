import { FunctionComponent } from 'react';
import './Component1.css';

export type Component1Type = {
  className?: string;
}



const Component1: FunctionComponent<Component1Type> = ({ className="" }) => {
  return (
    <div className={`profile-image ${className}`}>
      <div className="pexels-waldir-vora-5944321-1" />
    </div>);
};

export default Component1 ;
