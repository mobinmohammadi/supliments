import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { CartContext } from "../../Context/CartContext.jsx";
import BasketMobile from "./BasketMobile/BasketMobile.jsx";
import SearchBoxTopBar from "./SearchBoxTopBar/SearchBoxTopBar.jsx";
import ItemInBasketPc from "../ItemInBasketPc/ItemInBasketPc.jsx";
import BoxesForUserBaskets from "./BoxesForUserBaskets/BoxesForUserBaskets.jsx";
export default function TopBarMobile() {
  const { addToCart, cart } = useContext(CartContext);

  const modalUserBasket = useRef();
  const showDetailsSearch = useRef();

  const btnOpenUserBasket = useRef();
  const [isShowLayerModals, setIsShowLayerModals] = useState(false);

  const [isShowLayer, setIsShowLayer] = useState(false);

  const openModalUserbasket = () => {
    modalUserBasket.current.classList.add("left-0", "style-modalOpen");
    setIsShowLayerModals(true);
  };
  const closeModalUserBasket = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80", "style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModals = () => {
    modalUserBasket.current.classList.remove("left-0");
    modalUserBasket.current.classList.add("-left-80", "style-modalOpen");
    setIsShowLayerModals(false);
  };

  const closeModaleSearch = () => {
    setIsShowLayer(false);
    showDetailsSearch.current.classList.remove("showSearchWrapper");
    showDetailsSearch.current.classList.add("hiddenSearchWrapper", "invisible");
  };

  return (
    <div className=" border-b-4 block border-solid border-sky-700 bg-white fixed w-full z-20 ">
      <div className="flex flex-col pt-2 pb-2">
        <img className="" src="./s/offer.gif" alt="" />

        <div className="pst  bg-white   pl-5  flex  items-center justify-between">
          <SearchBoxTopBar
            showDetailsSearch={showDetailsSearch}
            closeModaleSearch={closeModaleSearch}
            setIsShowLayer={setIsShowLayer}
          />
          <div className=" md:flex hidden & > *:transition-all  & > *:border-1 & > *:border-solid & > *:border-slate-200 & > *:rounded-md & > *:p-2 gap-2 & > *:flex & > *:items-center & > *:gap-1 & > *:cursor-pointer">
            <div className="relative hover:border-red-500 hover:text-red-500">
              <div className="">
                <div className="flex items-center ">
                  <svg className=" w-5 h-5 ">
                    <use href="#user"></use>
                  </svg>
                  <span className=" text-sm pr-2 pl-2 font-Dana ">
                    ورود | ثبت نام
                  </span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div
                className={`absolute overflow-hidden  opacity-0 invisible border  border-solid group-hover:visible left-0 bg-white  transition-all rounded-md group-hover:opacity-100 min-h-18 w-[400px]  vi top-full`}
              >
                <div className=" text-gray-900 pt-2  shadow-2xl w-full  top-full h-full  ">
                  <div className="flex justify-between border-b-1 pb-2 border-solid border-solid-200">
                    <span className="text-xs pr-2">سبد خرید شما</span>
                    {cart.length ? (
                      <span className="text-x pl-2">
                        {cart.length} محصول در سبد خرید شما
                      </span>
                    ) : null}
                  </div>
                  <div
                    className={`pt-2 pb-2 pr-2 pl-2 flex gap-2 flex-col  ${
                      cart.length > 2 ? "overflow-y-scroll h-[300px]" : ""
                    }`}
                  >
                    {cart ? (
                      cart.map((item) => (
                        <BoxesForUserBaskets {...item} />
                      ))
                    ) : (
                      <span className="text-center pt-2 pb-2 font-Morabba-Bold text-sm border-dotted border-b-sky-700 border-b-2">
                        سبد خرید شما خالی میباشد ☹️
                      </span>
                    )}
                  </div>
                </div>
                {cart.length ? (
                  <div className=" w-full">
                    <span className="bg-green-700 w-full block pt-1 pb-1 text-center text-white">
                      تسویه حساب
                    </span>
                  </div>
                ) : null}
              </div>
              <svg
                ref={btnOpenUserBasket}
                onClick={() => openModalUserbasket()}
                className="w-5 h-5"
              >
                <use href="#shopping-cart"></use>
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 p-1 font-Dana rounded-full pr-2 pl-2 text-x text-white">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            ref={btnOpenUserBasket}
            onClick={() => openModalUserbasket()}
            className="relative border-1 pt-1 pb-1 flex md:hidden pr-6 pl-2 mr-2 rounded-l-sm cursor-pointer bg-rose-600 text-white rounded-r-md"
          >
            {cart?.length ? (
              <div className="w-5 h-5 bg-zinc-700 transition-all rounded-full text-center flex justify-center items-center absolute -right-2 -top-3">
                <span>{cart?.length}</span>
              </div>
            ) : null}
            <svg className="w-5 h-5">
              <use href="#shopping-cart"></use>
            </svg>
            <span className="absolute -top-2 -right-2 bg-zinc-900 p-1 font-Dana rounded-full pr-2 pl-2 text-x text-white">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <BasketMobile
          modalUserBasket={modalUserBasket}
          closeModals={closeModals}
          cart={cart}
          setIsShowLayerModals={setIsShowLayerModals}
          closeModalUserBasket={closeModalUserBasket}
        />
      </div>

      {isShowLayer ? (
        <span
          onClick={() => closeModaleSearch()}
          className={` ${
            isShowLayer ? "w-full h-full  bg-black/1 fixed top-0" : "hidden"
          } `}
        ></span>
      ) : (
        <span
          onClick={() => closeModaleSearch()}
          className={` ${
            isShowLayer ? "w-full h-full  bg-black/1 fixed top-0" : "hidden"
          } `}
        ></span>
      )}
      {isShowLayerModals ? (
        <div
          onClick={() => {
            closeModals();
          }}
          className="w-full h-full  bg-black/50 fixed top-0 z-[5]"
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
