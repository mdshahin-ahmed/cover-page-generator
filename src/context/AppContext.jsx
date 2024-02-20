/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const appContextValue = {
    test: "test value",
  };

  return (
    <AppContext.Provider
      value={{
        ...appContextValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
