import React from 'react';
import SpecialOne from './SpecialOne';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <SpecialOne asset={asset}></SpecialOne>
        </div>
    );
};

export default Myself;