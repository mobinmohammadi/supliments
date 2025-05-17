import React from "react";

export default function ShowWrapperSearch({
  cancelActions,
  isShowSearchBox,
}) {
  return (
    <div
      className={`bg-white w-full h-[90vh] ${
        isShowSearchBox ? " show-Search__box" : "top-full transition-all"
      }  rounded-t-2xl shadow-2xl fixed top-[100%] left-0`}
    >
      <div className="w-[95%] mx-auto  flex gap-3 flex-col">
        <div
          onClick={() => cancelActions()}
          className="bg-sky-500 w-full flex items-center rounded-md   mx-auto mt-2 justify-center p-3"
        >
          <svg className="w-10 h-10 text-zinc-800">
            <use href="#x-mark"></use>
          </svg>
        </div>
        <div className="text-zinc-800 rounded-md h-10 overflow-hidden bg-slate-300 flex">
          <input
            type="text"
            className="text-zinc-900 font w-full  pt-2 pb-2 pr-1 outline-0"
            placeholder="محصول مورد نظرتون را وارد نمایید .... "
          />
          <div className="w-15 h-full bg-zinc-700 hover:bg-zinc-900 transition-all items-center flex justify-center">
            <svg className="w-6 h-6 ">
              <use href="#search-normal"></use>
            </svg>
          </div>
        </div>
        <div className="text-black mt-2 border-t border-solid border-t-amber-500 pt-2 flex items-center justify-between font-bold">
          <span className="text-base font-bold tracking-wide">
            نتیجه جستوجو
          </span>
          <span>2 مورد یافت شد</span>
        </div>
      </div>
    </div>
  );
}
