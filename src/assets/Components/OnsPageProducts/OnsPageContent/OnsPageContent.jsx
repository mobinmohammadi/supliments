import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../../../Data";

export default function OnsPageContent({arrayUserBasket,setArrayUserBasket}) {
  const params = useParams()
  
  let  productForAddToUserBasket = null
  const addToUserBasket = (ProductID) => {
    productForAddToUserBasket = allProducts.filter(product => product.id == ProductID)
    setArrayUserBasket([...arrayUserBasket], {...productForAddToUserBasket})
  }
  console.log(productForAddToUserBasket);
  

  // console.log(arrayUserBasket);
  
  const productID = params.ProductID
  
  
  const filtredOnsProducts = allProducts.filter(item => item.id == productID)
  // setOnProductDetails(filtredOnsProducts)
  
  useEffect(() => {
    console.log(filtredOnsProducts[0].img);
  } ,[filtredOnsProducts])

  return (
    <div className="bg-white flex-col sm:flex-row  p-5 flex justify-around container-custom">
      <div className="w-full flex flex-col sm:w-[30%] mmd:w-[25%] ">
        <img
          className="w-72 rounded-md sm:w-[350px] h-60"
          src={filtredOnsProducts[0].img}
          alt=""
        />
        {/* {console.log(filtredOnsProducts)} */}
        <div className="mt-5 flex & > *:rounded-md & > *:cursor-pointer gap-2 & > *:border & > *:border-slate-700 & > *:border-solid
        ">
          <img className="w-18 "  src="../../../Images/Products/1.webp" alt="" />
          <img className="w-18 "  src="../../../Images/Products/2.webp" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center & > *:w-full w-full sm:w-[70%] pr-4 pb-2 pl-2">
        <div className="flex flex-col gap-2">
          <span className="text-md ">
              {filtredOnsProducts[0].name}
            </span>
          <span className="text-x text-slate-400">
            بارکد محصول: 039442014320
          </span>
        </div>
        <div className="flex justify-around">

        <div className="flex gap-5 w-full ml-5 ">
          <div className="w-full">
            <div className="flex mt-5 pb-5 justify-between  & > *:text-xs & > *:max-w-15 border-b-1 border-solid border-slate-200">
              <div className="">
                <span>نام محصول : </span>
                <span className="text-red-500">{filtredOnsProducts[0].name}</span>
              </div>
              <div className="">
                <span>دسته بندی : </span>
                <span className="text-red-500 leading-4">
                  {" "}
                  یونیورسال نوتریشن | Universal Nutrition
                </span>
              </div>
            </div>
            <div className="text-xs border-t-1 mt-5 border-solid border-slate-100 ">
              <span className="mt-3 text-zinc-800 text-sm inline-block pb-5 font-bold ">
                مشخصات محصول :
              </span>
              <ul className="flex flex-col gap-5 & > *:pr-7 ">
                <li className="item-products-details">
                  <span>تاریخ انقضا :</span>
                  <span>1405/03/01</span>
                </li>
                <li className="item-products-details">
                  <span>تعداد سروینگ : </span>
                  <span>180 عددی | 30 سروینگ</span>
                </li>
                <li className="item-products-details">
                  <span>نوع محصول : </span>
                  <span>تبلت</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] max-w-60 w-full pr-2 pl-2 & > *:border-b-1 & > *:pb-2 & > *:border-b-slate-200 flex flex-col gap-2">
          <div className="">
            <div className="border border-solid  p-1 mx-auto flex items-center flex-col gap-1 rounded-sm border-zinc-500 mt-5">
              <span className="text-sm font-bold">امتیاز محصول</span>
              <div className="flex gap-0.5 & > *:w-4 & > *:h-4 & > *:text-amber-400">
                <svg className="">
                  <use href="#star"></use>
                </svg>
                <svg className="">
                  <use href="#star"></use>
                </svg>
                <svg className="">
                  <use href="#star"></use>
                </svg>
                <svg className="">
                  <use href="#star"></use>
                </svg>
                <svg className="">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="  & > *:border-b-1 flex gap-5 flex-col & > *:pb-2 & > *:border-b-slate-200 & > *:flex  & > *:flex-col & > *:items-center & > *:gap-0.5 & > *:md:flex-row & > *:md:items-start">

          <div className=" flex  & > *:flex-col md:& > *:md:flex-row ">
            <svg className="w-5 h-5">
              <use href="#building-storefront"></use>
            </svg>
            <div className="flex items-center pr-1 flex-col md:flex-row">
              <span className="text-red-500 text-xs">فروشنده : </span>
              <span className="text-green-800 text-xs">سایت مکمل محمدی</span>
            </div>
          </div>
          <div className=" flex & > *:flex-col md:& > *:md:flex-row ">
            <svg className="w-5 h-5">
              <use href="#circle-stack"></use>
            </svg>
            <div className="flex items-center pr-1">
              <span className="text-red-500 text-xs">دسترسی : </span>
              <span className="text-green-800 text-xs">
                در انبار موجود میباشد
              </span>
            </div>
          </div>
          <div className=" flex & > *:flex-col md:& > *:md:flex-row">
            <svg className="w-5 h-5">
              <use href="#clock"></use>
            </svg>
            <div className="flex items-center pr-1 gap-1">
              <span className="text-red-500 text-xs">مدت زمان تحویل : </span>
              <span className="text-green-800 text-xs"> 12 - 24 ساعت </span>
            </div>
          </div>
          </div>
          <div className="flex text-xl justify-center gap-0.5 items-center">
            <span className=" text-zinc-600 font-bold ">{filtredOnsProducts[0].price}</span>
            {/* <span className="text-[15px] text-blue-800 ">تومان</span> */}
          </div>
          <div className="">
            <div className="flex flex-col">
              <span>تعداد : </span>
              <select className="border border-slate-600 border-solid rounded-md mb-2 mt-2" name="" id="">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
              </select>
            </div>
            <div className="bg-[#ef3f54] gap-0.5 abs rounded-sm text-white pt-3 pb-3 justify-center flex items-center">
              <svg className="w-5 h-5 ">
                <use href="#shopping-cart"></use>
              </svg>
              <span className="text-sm" onClick={() => addToUserBasket(filtredOnsProducts[0].id)}>افزودن به سبد خرید</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
