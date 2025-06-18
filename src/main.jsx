import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnsPageProducts from "./assets/Components/OnsPageProducts/OnsPageProducts.jsx";
import FilterBrands from "./Pages/FilterBrands/FilterBrands.jsx";
import CategurtByProducts from "./Pages/CategurtByProducts/CategurtByProducts.jsx";
import { CartProvider } from "./assets/Context/CartContext.jsx";
import NotFoundPage from "./Pages//NotFoundPage/NotFoundPage.jsx";
import { ToastContainer } from "react-toastify";
import PurchaseProcessCart from "./Pages/PurchaseProcessCart/PurchaseProcessCart.jsx";
import TheSeconedStepOfTheShoppingCart from "./Pages/PurchaseProcessCart/TheSeconedStepOfTheShoppingCart/TheSeconedStepOfTheShoppingCart.jsx";
import Panel from "./Pages/Panel/Panel.jsx";
import Login from "./Pages/Login/Login.jsx";
import TheMonyStepOfTheShoppingCart from "./Pages/PurchaseProcessCart/TheMonyStepOfTheShoppingCart/TheMonyStepOfTheShoppingCart.jsx";
import TheFirstStepOfTheShoppingCart from "./Pages/PurchaseProcessCart/TheFirstStepOfTheShoppingCart/TheFirstStepOfTheShoppingCart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/onspageproduct/:ProductID"
          element={<OnsPageProducts />}
        />
        <Route path="/productsBrand/:BrandName" element={<FilterBrands />} />
        <Route
          path="/categuryByProducts/:categuryProduct"
          element={<CategurtByProducts />}
        />
        <Route path="/cart" element={<PurchaseProcessCart />} >
              <Route index  element={<TheFirstStepOfTheShoppingCart />}/>
              <Route path="billingaddress" element={<TheSeconedStepOfTheShoppingCart />}/>
              <Route path="billingaddress/mony" element={<TheMonyStepOfTheShoppingCart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CartProvider>
    <ToastContainer autoClose={2000} position="top-right" />
  </BrowserRouter>
);
