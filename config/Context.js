import React, { useState } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("Casablanca");

  return (
    <Context.Provider value={{ name, setName, signedUp, setSignedUp, isLoading, setIsLoading, city, setCity }}>
      {children}
    </Context.Provider>
  );
};
