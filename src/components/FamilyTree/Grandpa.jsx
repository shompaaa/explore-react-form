import React from "react";
import Uncle from "./Uncle";
import Aunt from "./Aunt";
import Dad from "./Dad";

const Grandpa = ({asset}) => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad asset = {asset}></Dad>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
