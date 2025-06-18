import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../assets/Context/CartContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BoxDetailsBasket({ isClickedPost, setISClickedPost }) {
  const { cart, allPriceInBasket } = useContext(CartContext);

  const location = useLocation();

  const [isPathName, setPathName] = useState("");
  const [isPathNameTwo, setPathNameTwo] = useState("");

  const goto = useNavigate();
  const pathName = location.pathname;

  useEffect(() => {
    if (location.pathname == "/cart/billingaddress") {
      setPathName(true);
    } else if (location.pathname == "/cart/billingaddress/mony") {
      setPathNameTwo(true);
    }
    // else if()
  }, []);

  return (
    <div className="w-full sm:w-[400px] h-[400px] bg-white flex p-4 font-Dana flex-col gap-5 text-center">
      <div className="flex justify-between w-full border-b-1 border-b-[#ef3f56]">
        <div className="flex flex-col gap-3 pb-3 w-full">
          <div className="flex justify-between w-full">
            <div className="flex gap-1 text-xs">
              <span>مبلغ کل</span>
              <span>({cart?.length} کالا)</span>
            </div>
            <div className="flex gap-1">
              {isPathNameTwo ? (
                <span className="mt-0.5">
                  {(allPriceInBasket).toLocaleString()}
                </span>
              ) : (
                <span className="mt-0.5">
                  {allPriceInBasket.toLocaleString()}
                </span>
              )}
              <span className="font-Morabba ">تومان</span>
            </div>
          </div>
          {isPathName ? (
            <div className="">
              <div className="flex justify-between text-right">
                <span className="text-xs">هزینه حمل و نقل :</span>
                <div className="text-x">
                  {isClickedPost ? (
                    <span className="text-xs">250,000 تومان</span>
                  ) : (
                    <span className="text-red-700">
                      لطفا یکی از شیوه های حمل و نقل را انتخاب کنید !!
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {isClickedPost ? null : isPathNameTwo ? (
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2 ">
            <span className="text-gray-900 text-sm font-Morabba ">مبلغ قابل پرداخت</span>
            <span className="text-[#ef3f56] text-base  font-Dana-Bold">
              {(allPriceInBasket + 250000).toLocaleString()}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <span className="text-gray-900 text-sm">مبلغ قابل پرداخت</span>
            <span className="text-[#ef3f56] text-base font-Morabba-Bold ">
              محاسبه در طول پرداخت
            </span>
          </div>
        </div>
      )}
      <Link
        to={`${pathName == "/cart" ? "billingaddress" : "mony"}`}
        className="bg-red-500 group cursor-pointer relative text-white pt-3 pb-3 rounded-sm"
      >
        <span className="">مرحله بعد </span>
        <div className="absolute -right-5 h-12 bg-slate-100/40  rounded-full top-0  w-16 group-hover:w-64 transitions-Custom  "></div>
        <svg className="w-6 h-6 absolute group-hover:right-54 transitions-Custom top-2.5 right-2 text-white">
          <use href="#chevron-left"></use>
        </svg>
      </Link>
      <div className="flex flex-col gap-0.5 text-slate-400 tracking-wider  & > *:max-w-44 text-x text-right">
        <span>کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند،</span>
        <span>برای ثبت سفارش مراحل بعدی را تکمیل کنید.</span>
      </div>
    </div>
  );
}
