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
