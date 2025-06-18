import React, { useState } from "react";
import TheFirstStepOfTheShoppingCart from "./TheFirstStepOfTheShoppingCart/TheFirstStepOfTheShoppingCart";
import TopBarMobile from "../../assets/Components/TopBarMobile/TopBarMobile.";
import CheckoutProgressBar from "./CheckoutProgressBar/CheckoutProgressBar";
import BradCrumbCart from "./BradCrumbCart/BradCrumbCart";
import { Outlet } from "react-router-dom";
import Statiks from "./Layout/Statiks";

export default function PurchaseProcessCart() {


  return (
        <div className="">
          <Statiks/>
          <Outlet/>


        </div>

  );
}
