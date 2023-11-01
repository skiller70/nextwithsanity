"use client";
import React, { useState } from "react";
import myContext from "./contextImport";
const ContextProvider = ({children}) => {
  const [ez, setEz] = useState({name:"lucky"});

  return (
    <>
      <myContext.Provider value={ez}>{children}</myContext.Provider>;
    </>
  );
};

export default ContextProvider;
