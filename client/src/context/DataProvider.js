import React from "react";
import { createContext, useState } from "react";

export const dataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState("");
  return (
    <dataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
