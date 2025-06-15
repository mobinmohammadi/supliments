import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../../../Data";
import OnsPageSliderProduct from "../OnsPageSliderProduct/OnsPageSliderProduct";
import ShareProducts from "../../ShareProducts/ShareProducts";
import TasteProducts from "../TasteProducts/TasteProducts";
import ShoppingCartDetailAndOtherSpecifications from "../ShoppingCartDetailAndOtherSpecifications/ShoppingCartDetailAndOtherSpecifications";
import NameAndCateguryNameAndMore from "../NameAndCateguryNameAndMore/NameAndCateguryNameAndMore";
import ImagesAndSliderForProductsSinglePages from "../ImagesAndSliderForProductsSinglePages/ImagesAndSliderForProductsSinglePages";
import { CartContext } from "../../../Context/CartContext";

export default function OnsPageContent({}) {

  const [isShowMenuOnPage , setIsShowMenuOnPage] = useState(false)

  const { addToCart } = useContext(CartContext);
  const [srcProductStatus, setSrcProductStatus] = useState();
  const [isShowSliderMoreOnOneProducts, setIsShowSliderMoreOnOneProducts] =
    useState(false);
  const [idToast, setIdToast] = useState(null);
  const params = useParams();
  const [isShowPageShare, setIsShowPageShare] = useState(false);
  let [titleForBasket, setTitleForBasket] = useState("");

  function setSrcImageProductsHandler(srcSerialImg) {
    console.log("srcSerialImg ====>", srcSerialImg);
    setSrcProductStatus(srcSerialImg);
  }

  const productID = params.ProductID;

  const filtredOnsProducts = allProducts.filter((item) => item.id == productID);

  useEffect(() => {}, [filtredOnsProducts]);

  useEffect(() => {
    setSrcProductStatus(filtredOnsProducts[0].img);
  }, []);
  const subImg = filtredOnsProducts[0].subImg.map((img) => img.img);

  function handlePageShare() {
    setIsShowPageShare(true);
    console.log(isShowPageShare);
  }

  function cancellActionsForShareProducts() {
    setIsShowPageShare(false);
  }

  const getAlltest = filtredOnsProducts[0].taste.map((tast) => tast);

  // ==============================================================

  const loaderOnPages = useRef(null);

  setTimeout(() => {
    loaderOnPages.current.classList += "opacity-0 hidden";
  }, 300);

  // ==============================================================

  // =======   Status Found Products    =========================

  const statusFoudProducts = filtredOnsProducts[0].taste.filter(
    (item) => item.id === idToast
  );

  if (statusFoudProducts.length > 0) {
    const result = statusFoudProducts[0];
    console.log(result.status);

    if (result.status == 0) {
      titleForBasket = "از این طعم موجودی نداریم 😭";
      setTimeout(() => {
        setTitleForBasket("");
      }, 2000);
    } else {
      titleForBasket = " افزودن به سبد خرید";
      setTimeout(() => {
        setTitleForBasket("");
      }, 2000);
    }
  }
  //

  // const resultAfterFoundStatusTast =

  // ==============================================================

  const btnAferLoadedPage = useRef(null);
  setTimeout(() => {
    btnAferLoadedPage.current.classList += " aftreLoadedOnsPageUserBasketBtn";
  }, 200);
  setTimeout(() => {
    btnAferLoadedPage.current.classList +=
      " aftreLoadedOnsPageUserBasketBtnLast";
  }, 500);

  // ================  On Scroll =====================================
  const [isActiveScroll, setIsActiveScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 720) {
        return setIsActiveScroll(true);
      } else if (window.scrollY < 720) {
        return setIsActiveScroll(false);
      } else if (window.scrollY > 985) {
        return setIsActiveScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(isActiveScroll);

  return (
    <div className="">
      <div className="bg-white flex-col mt-5-xutom sm:flex-row  p-5 flex justify-around container-custom">
        <ImagesAndSliderForProductsSinglePages
          isShowPageShare={isShowPageShare}
          setIsShowPageShare={setIsShowPageShare}
          setSrcImageProductsHandler={setSrcImageProductsHandler}
          subImg={subImg}
          srcProductStatus={srcProductStatus}
          setIsShowSliderMoreOnOneProducts={setIsShowSliderMoreOnOneProducts}
          filtredOnsProducts={filtredOnsProducts}
        />
        <div className="flex flex-col items-center & > *:w-full w-full sm:w-[70%] pr-4 pb-2 pl-2">
          <div className="flex flex-col gap-2 mt-5 sm:mt-0">
            <span className="text-md mt-5 mb-5 ">
              {filtredOnsProducts[0].name}
            </span>
            <div className="text-x p-3  sm:p-5 rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
              <span className="text-sm text-center sm:text-sm font-bold"></span>
              <div className="text-x p-5  rounded-sm text-white tracking-wider flex items-center justify-center bg-slate-400">
                <span className="text-xs sm:text-sm font-bold">
                  بارکد محصول: {Math.ceil(Math.random() * 100000000000000000)}
                </span>
              </div>
            </div>
            <div className="flex justify-around flex-col sm:flex-row">
              <div className="flex justify-around flex-col sm:flex-row">
                <NameAndCateguryNameAndMore
                  subImg={subImg}
                  filtredOnsProducts={filtredOnsProducts}
                  getAlltest={getAlltest}
                  setIdToast={setIdToast}
                />
                <ShoppingCartDetailAndOtherSpecifications
                  filtredOnsProducts={filtredOnsProducts}
                  titleForBasket={titleForBasket}
                  setTitleForBasket={setTitleForBasket}
                />
              </div>
            </div>
          </div>
          <div
            className={`container-custom mx-auto ${
              isShowPageShare
                ? "opacity-100 visible transitions-all"
                : "opacity-0 invisible h-10 overflow-hidden transitions-Custom"
            }`}
          >
            <ShareProducts
              cancellActionsForShareProducts={cancellActionsForShareProducts}
            />
          </div>
          <div
            className={`${
              isShowSliderMoreOnOneProducts
                ? "ShowSliderMoreOnOneProducts transition-all h-[100vh]"
                : "h-[50vh] transition-all opacity-0 invisible transitions-Custom"
            } fixed  bg-slate-300 top-0  w-full z-50 right-0`}
          >
            <OnsPageSliderProduct
              filtredOnsProducts={filtredOnsProducts[0]}
              setIsShowSliderMoreOnOneProducts={
                setIsShowSliderMoreOnOneProducts
              }
            />
          </div>
          {isShowPageShare ? (
            <div
              onClick={() => cancellActionsForShareProducts()}
              className="bg-black/40 fixed top-0 w-full h-full z-30 right-0"
            ></div>
          ) : null}
          <div
            ref={loaderOnPages}
            className=" fixed w-full h-full right-0 bg-teal-900 top-0 z-50 flex items-center justify-center"
          >
            <span className="loader w-60"></span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div
          ref={btnAferLoadedPage}
          className={` gap-0.5 space-x-16 flex  justify-between ${
            isActiveScroll
              ? "opacity-0 transitions-Custom fixed"
              : "opacity-100 fixed"
          }  bottom-10 w-[80%] border-t-2  border-gray-900 border-solid pt-2  text-center flex pb-2 items-center justify-evenly cursor-pointer rounded-t-sm transition-all bg-white text-gray-900  z-10`}
        >
          <div
            onClick={() => addToCart(filtredOnsProducts[0])}
            className="flex gap-1 relative bg-red-600 w-64 pt-3 pb-3 rounded-sm justify-center text-white font-Dana "
          >
            <div className="bg-white rounded-full p-2 top-1 absolute right-2 text-gray-900">
              <svg className="w-4  h-4">
                <use href="#shopping-cart"></use>
              </svg>
            </div>
            <span className="text-xs">افرودن به سبد خرید</span>
          </div>
          <div className=" relative flex items-center justify-center w-10 h-10 leading-10">
            <div onClick={() => setIsShowMenuOnPage(prev => !prev)} className={`flex flex-col items-center transition-all pt-1 rounded-sm pb-1 pr-2 pl-2  ${isShowMenuOnPage ? "bg-gray-900 border-b-red-500 border-b-4 text-white" : ""}`}>
              <svg className="w-6 h-6">
                <use href="#bars-3"></use>
              </svg>
              <span  className={` text-xs`}>بیشتر</span>
            </div>
            <div  className={`transition-all  ${isShowMenuOnPage ? "opacity-100 visible bottom-[140%]" : "opacity-0 invisible bottom-[50%]"} absolute  rounded-sm left-0 w-40  bg-gray-900`}>
              <div className="absolute  rounded-sm left-0 w-40 bottom-[140%] bg-gray-900 ">
                <div className="flex flex-col items-start pr-3 & > *: & > *:gap-1 & > *:flex  & > *:justify-center  text-xs font-Dana pt-2 pb-2 gap-5 text-white">
                  <div className="">
                    <svg className="w-4 h-4">
                      <use href="#home"></use>
                    </svg>
                    <span>خانه</span>
                  </div>
                  <div className="">
                    <svg className="w-4 h-4">
                      <use href="#user"></use>
                    </svg>
                    <span className="">پروفایل</span>
                  </div>
                  <div className="">
                    <svg className="w-4 h-4">
                      <use href="#search-normal"></use>
                    </svg>
                    <span className="">جستوجو</span>
                  </div>
                  <div className="">
                    <svg className="w-4 h-4">
                      <use href="#adjustments-horizontal"></use>
                    </svg>
                    <span>دسته بندی ها</span>
                  </div>
                  <div className="">
                    <svg className="w-4 h-4">
                      <use href="#shopping-bag"></use>
                    </svg>
                    <span>سبد خرید من</span>
                  </div>
                  <div className="">
                    <svg className="w-4 h-4 rotate-[260deg]">
                      <use href="#phone-arrow-down-left"></use>
                    </svg>
                    <span>تماس</span>
                  </div>
                </div>
              </div>
              <div className="w-5 h-5 bg-gray-900 absolute bottom-[135%] left-1 rounded-sm rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
