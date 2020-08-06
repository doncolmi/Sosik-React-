import React, { FC } from 'react';
import './icon.css';

interface Props {
    Message: string;
}

const Down: FC<Props> = ({Message}: Props) => {
    return (
        <div className="icons down flexColumn flexCenter">
            <div className="scrollMessage">{ Message }</div>
            <span className="motions"><i className="fas fa-chevron-down"></i></span>
        </div>
    );
}

export default Down;