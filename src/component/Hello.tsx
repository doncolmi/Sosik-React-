import React from 'react';
import './Hello.css';

interface Props {
    name: string;
}

export const Hello: React.FunctionComponent<Props> = ({name}) => {
    return (
        <div className="Hello">
            Hello, {name}
        </div>
    );
};
