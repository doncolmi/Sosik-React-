import React, { FC } from 'react';
import './icon.css';

import Icon from './Icon';


const Icons: FC = () => {
    return (
        <div className="icons">
            <Icon Name="fab fa-node" Delay="700"/>
            <Icon Name="fab fa-react" Delay="800"/>
            <Icon Name="fab fa-node-js" Delay="900"/>
        </div>
    );
}

export default Icons;