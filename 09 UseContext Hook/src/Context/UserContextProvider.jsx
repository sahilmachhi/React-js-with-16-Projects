import React, { useState } from "react";
import mainContext from "./mainContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <mainContext.Provider value={{ user, setUser }}>
      {children}
    </mainContext.Provider>
  );
};

export default UserContextProvider;
