import { create } from "zustand";

// create method generates custom hook
// It takes a function
// function takes couple of parameter
// set and
const useStore = create((set) => {
  return {
    user: "",
    cartCount: 0,
    login: () => set(() => ({ user: "Gaurav" })),
    logout: () => set(() => ({ user: "" })),
    addTocart: () =>
      set((state) => {
        return { cartCount: state.cartCount + 1 };
      }),
  };
});

// export default useStore;

// Provide abstraction layer on default export
export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
export const useAddToCart = () => useStore((state) => state.addTocart);
export const useUser = () => useStore((state) => state.user);
export const useCartCount = () => useStore((state) => state.cartCount);

// The main diff between context and Zustand is
// Zustand only update the piece of UI which will effect the state

// Context will update the whole component tree re-render if any piece of state change changes
// We can check this Profiler --> Settings --> Highlight updates when components render.

// we can overcome the context re-render problem with one NPM package called use-context-selector
