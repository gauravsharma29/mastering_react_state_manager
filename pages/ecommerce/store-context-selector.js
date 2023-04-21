import { useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";

// export default useStore;

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    // this all gets re-create everytime we call the hook
    // so to prevent them we are using useCallback() hook
    login: useCallback(() => setUser("Gaurav"), []),
    logout: useCallback(() => setUser(""), []),
    addTocart: useCallback(() => setCartCount((cartCount) => cartCount + 1), []),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  return <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>;
};

// Provide abstraction layer on default export
export const useLogin = () => useContextSelector(StoreContext, (s) => s.login);
export const useLogout = () => useContextSelector(StoreContext, (s) => s.logout);
export const useAddToCart = () => useContextSelector(StoreContext, (s) => s.addTocart);
export const useUser = () => useContextSelector(StoreContext, (s) => s.user);
export const useCartCount = () => useContextSelector(StoreContext, (s) => s.cartCount);

// The main diff between context and Zustand is
// Zustand only update the piece of UI which will effect the state
// Context will update the whole component re-render if any peice of change changes
// We can check this Profiler --> Settings --> Highlight updates when components render.
