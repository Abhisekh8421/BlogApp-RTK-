import React from "react";
import { useSelector } from "react-redux";

const Countervalue = () => {
  const { countValue } = useSelector((state) => state.counter);
  console.log(countValue);

  return <h1>Counter Value is {countValue}</h1>;
};

export default Countervalue;
