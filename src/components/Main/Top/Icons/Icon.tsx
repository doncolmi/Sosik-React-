import React, { FC } from 'react';
import './icon.css';

interface Props {
    Name: string;
    Delay: string;
}

const NodeIcon: FC<Props> = ({Name, Delay}: Props) => {
    return (
        <div className="icon iconFont flexCenter" data-aos="fade-up"
        data-aos-delay={Delay}
        data-aos-duration="1000">
            <span><i className={Name}></i></span>
        </div>
    );
}

export default NodeIcon;