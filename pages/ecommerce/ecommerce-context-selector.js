import { useLogin, useLogout, useUser, useAddToCart, useCartCount, StoreContextProvider } from "./store-context-selector";

const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};

const UserSection = () => {
  const user = useUser();
  return <div>User: {user}</div>;
};

const AddToCartSection = () => {
  const addTocart = useAddToCart();
  return (
    <div>
      <button onClick={addTocart}>AddToCart</button>
    </div>
  );
};

const CartCountSection = () => {
  const cartCount = useCartCount();
  return <div>Cart Count: {cartCount}</div>;
};

function EcommerceContext() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
}

export default function EcommerceContextWrapper() {
  return (
    <StoreContextProvider>
      <EcommerceContext />
    </StoreContextProvider>
  );
}
