import React from "react";
import { useDispatch } from "react-redux";
import {
  handleDecreaseCountAction,
  handleIncreaseCountAction,
} from "../store/slices/counter";

const Counterbutton = () => {
  const dispatch = useDispatch();

  const handleClickIncrease = () => {
    dispatch(handleIncreaseCountAction());
  };
  const handleClickDecrease = () => {
    dispatch(handleDecreaseCountAction());
  };

  return (
    <>
      <button onClick={handleClickIncrease}>Increase Counter</button>
      <button style={{ marginLeft: "10px" }} onClick={handleClickDecrease}>
        Decrease Counter
      </button>
    </>
  );
};

export default Counterbutton;
