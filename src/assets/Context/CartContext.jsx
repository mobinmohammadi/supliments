import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const saveInToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const getDataInLocaleStorage = () => {
    const localStorageData = JSON.parse(localStorage.getItem("cart"));
    console.log(localStorageData);
  };

  const removeInBasket = (productID) => {
    setCart((prevCart) => {
      let product = prevCart.find((product) => product.id === productID);
      if (!product) return prevCart;

      if (product.count > 1) {
        return prevCart.map((item) =>
          item.id === productID ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productID);
      }
    });
  };

  useEffect(() => {
    saveInToLocalStorage(cart);
  }, [cart]);
  const addToCart = (product) => {
    console.log(product);
    
    const existing = cart.find((item) => item.id === product.id);
    const currentCount = existing ? existing.count : 0;
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            setCart((prevCart) => {
              const exist = prevCart.find((item) => item.id == product.id);
              if (exist) {
                return prevCart.map((item) =>
                  item.id === product.id
                    ? { ...item, count: item.count + 1 }
                    : item
                );
              } else {
                return [...prevCart, { ...product, count: 1 }];
              }
            });
            resolve();
          } catch (error) {
            reject();
          }
        }, 1000);
      }),
      {
        pending: "در حال افزودن به سبد خرید...",
        success: existing
          ? `1 عدد دیگر اضافه شد (الان: ${currentCount + 1} عدد)`
          : "محصول به سبد خرید اضافه شد ✅",
        error: "افزودن به سبد خرید با خطا مواجه شد ❌",
      }
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeInBasket }}>
      {children}
    </CartContext.Provider>
  );
};
