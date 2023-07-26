import { useState } from "react";
import DataContext from "./DataContext";

// export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [userAccount, setAccount] = useState("");

  return (
    <DataContext.Provider value={{ userAccount, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
