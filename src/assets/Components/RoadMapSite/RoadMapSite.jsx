import React from "react";
import { Link } from "react-router-dom";
import "./../../../App.css"

export default function RoadMapSite() {
  return (
    <div className="bg-slate-200  pr-4 font-bold items-center container-custom m-auto  mt-5 rounded-md">
      <div className="flex h-10 gap-7 & > *:h-full items-center ">
        <Link to="/" className="flex items-center h-full w-12 breadcrumb-item">
          <svg className="w-6 h-6">
            <use href="#home"></use>
          </svg>
        </Link>
        <div className="flex items-center w-[70px] breadcrumb-item">
          <span className="ml-3 text-sm">مکمل ها</span>
        </div>
        <div className="flex items-center w-[70px] breadcrumb-item">
          <span className="ml-3 text-sm">کراتین</span>
        </div>
      </div>
    </div>
  );
}
