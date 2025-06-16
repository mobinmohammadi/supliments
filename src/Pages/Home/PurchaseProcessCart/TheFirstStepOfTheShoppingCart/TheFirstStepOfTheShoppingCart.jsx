import React from "react";
import TopBarMobile from "../../../../assets/Components/TopBarMobile/TopBarMobile.";
import CheckoutProgressBar from "./CheckoutProgressBar";

export default function TheFirstStepOfTheShoppingCart() {
    const step = ["سبد خرید" , "اطلاعات ارسال", "پرداخت" , "اتمام خرید و ارسال"]

  return (
    <div className="">
      <TopBarMobile />
      <div className="pt-22 flex flex-col gap-7 text-sm font-Dana-Bold container-custom pr-3 pl-3">
        <div className="flex gap-2 pt-2">
          <span>خانه</span>
          <span>/</span>
          <span className="border-b border-b-gray-900 pb-1 rounded-xs">
            سبد خرید شما
          </span>
        </div>
        

        <CheckoutProgressBar currentStep={4}/>
        
      </div>
    </div>
  );
}
