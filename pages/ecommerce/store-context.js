import { useState, createContext, useContext } from "react";

// export default useStore;

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: () => setUser("Gaurav"),
    logout: () => setUser(""),
    addTocart: () => setCartCount((cartCount) => cartCount + 1),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  return <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>;
};

// Provide abstraction layer on default export
export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
export const useAddToCart = () => useContext(StoreContext).addTocart;
export const useUser = () => useContext(StoreContext).user;
export const useCartCount = () => useContext(StoreContext).cartCount;

// The main diff between context and Zustand is
// Zustand only update the piece of UI which will effect the state
// Context will update the whole component re-render if any peice of change changes
// We can check this Profiler --> Settings --> Highlight updates when components render.
