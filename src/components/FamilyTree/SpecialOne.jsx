import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const SpecialOne = ({asset}) => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h3>Special One</h3>
            <p>A simple {asset} for my love</p>
            <p>A simple {newAsset} for my love</p>
        </div>
    );
};

export default SpecialOne;



