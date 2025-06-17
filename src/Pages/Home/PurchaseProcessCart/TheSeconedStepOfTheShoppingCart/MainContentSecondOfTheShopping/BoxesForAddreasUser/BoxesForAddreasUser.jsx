import React from "react";

export default function BoxesForAddreasUser() {
  return (
    <div className="bg-white rounded-md p-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-xs font-Dana">
            <div className="">
              <span>گیرنده :</span>
              <span>احسان حاجی</span>
            </div>
            <div className="">
              <span>شماره تماس :</span>
              <span>0903587496</span>
            </div>
            <div className="">
              <span>استان :</span>
              <span>آذبایجان غربی شهر نقده به آدرس بلوار فردوسی ****</span>
            </div>
          </div>
          <div className="flex gap-3 text-xs text-red-700">
            <span>اصلاح این آدرس</span>
            <span>حذف این آدرس</span>
          </div>
        </div>
        <div className="flex  pr-4 pl-4 h-10 text-xs items-center justify-center text-white rounded-e-md bg-sky-800">
          <span>انتخاب شده</span>
        </div>
      </div>
      <div className="bg-slate-100 w-10 h-10 flex items-center justify-center  rounded-full ">

      <svg className="w-5 h-5">
        <use href="#check"></use>
      </svg>
      </div>
    </div>
  );
}
