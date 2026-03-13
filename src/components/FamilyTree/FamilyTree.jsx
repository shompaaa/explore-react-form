import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext('');

// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(0)

const FamilyTree = () => {

    const [money, setMoney] = useState(0)

  const asset = "Diamond";
  const newAsset = 'Gold';

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Family Total Money: {money}</h4>
     
     <MoneyContext value={[money,setMoney]}>
         <AssetContext.Provider value={newAsset}>
        <Grandpa asset={asset}></Grandpa>
      </AssetContext.Provider>
     </MoneyContext>

    </div>
  );
};

export default FamilyTree;


/***
 * 1. create a context using createContext with a initial value. Make sure you import the context to be used in other files
 */
