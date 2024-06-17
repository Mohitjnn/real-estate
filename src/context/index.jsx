import { createContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  return <AppContext.Provider>{children}</AppContext.Provider>;
}
