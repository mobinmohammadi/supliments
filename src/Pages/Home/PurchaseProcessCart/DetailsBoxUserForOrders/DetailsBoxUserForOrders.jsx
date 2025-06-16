import React from "react";

export default function DetailsBoxUserForOrders({
  setDetailsBoxUserForOrders,
  isDetailsBoxUserForOrders
  
}) {
  return (
    <div className={`fixed ${isDetailsBoxUserForOrders ? "opacity-100 visible transition-Custom" : "opacity-0 invisible" } transition-all overflow-y-scroll pb-5 bg-white w-full h-full top-0 z-20 `}>
      <div className="flex items-center justify-between p-5 text-xs border-b-slate-300 border-solid border-b-1">
        <span className="text-sm">افزودن آدرس جدید</span>
        <div onClick={() => setDetailsBoxUserForOrders(false)} className="">
          <svg className="w-6 h-6">
            <use href="#x-marks"></use>
          </svg>
        </div>
      </div>
      <div className="font-Dana text-xs p-5 flex flex-col gap-3">
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>نام تحویل گیرنده </span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0  h-full"
              placeholder="احسان..."
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>نام خانوادگی تحویل گیرنده </span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0  h-full"
              placeholder="رمضانی ..."
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>شماره موبایل </span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 p-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full text-left pl-1 outline-0  h-full"
              placeholder="*********09"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>شماره ملی</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0 text-left pl-2 h-full"
              placeholder="xxxxxxxxx"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>استان</span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0  h-full"
              placeholder=" ..."
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex gap-1">
            <span>شهر</span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0  h-full"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex gap-1">
            <span>آدرس پستی</span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <textarea
              type="text"
              className="w-full outline-0  h-12 pr-1"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex gap-1">
            <span>کد پستی</span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <textarea
              type="text"
              className="w-full outline-0  h-12 pr-1"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex gap-1">
            <span>آدرس پستی</span>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <textarea
              type="text"
              className="w-full outline-0  h-12 pr-1"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>کد پستی</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0  h-full"
              placeholder=" "
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-1">
            <span>شماره تلفن ثابت</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <input
              type="text"
              className="w-full outline-0  h-full"
              placeholder=" "
            />
          </div>
        </div>
      </div>
      <div className=" text-white font-Dana flex justify-end pl-5 ">
        <span className="bg-[#ef3f56] pt-1 pb-1 rounded-sm pr-3 pl-3">
          ثبت آدرس
        </span>
      </div>
    </div>
  );
}
