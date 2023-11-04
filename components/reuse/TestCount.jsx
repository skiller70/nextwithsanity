"use client";
import React from "react";
import { useAppDispatch,useAppSelector } from "../../app/lib/reduxHook";
export const TestCount = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.countReducer);
  return (
    <>
      <div className="  prose container my-16 flex justify-center items-center w-[100%]">
        <h1>this is count {count}</h1>
        <button onClick={()=>{dispatch({type:"COUNT_REDUCER"})}}>click</button>
      </div>
    </>
  );
};
