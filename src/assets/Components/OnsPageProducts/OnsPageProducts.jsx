import React, { useEffect, useState } from "react";
import TopBarMobile from "../TopBarMobile/TopBarMobile.";
import { useParams } from "react-router-dom";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import OnsPageContent from "./OnsPageContent/OnsPageContent";
import SliderProducts from "../SliderProducts/SliderProducts";
import Footer from "../Footer/Footer";
import { allProducts } from "../../../Data";
import { title } from "framer-motion/client";
import MyParallaxSwiper from "../SwiperSlide/SwiperSlide";

export default function OnsPageProducts() {
  // ================================================================

  const pageID = useParams().ProductID;

  // ====================== Found Categury Prodauct Name ===========

  const nameBreadCrumb = allProducts.find((item) => item.id == pageID);
  let titleBreadCrumb = "";
  switch (nameBreadCrumb.categury) {
    case "creatin":
      {
        titleBreadCrumb = "کراتین";
      }
      break;
    case "gainer":
      {
        titleBreadCrumb = "گینر";
      }
      break;
    case "Growth hormone":
      {
        titleBreadCrumb = "هورمون رشد";
      }
      break;
    default: {
      titleBreadCrumb = "در حال توسعه";
    }
  }

  // ==============================================================

  return (
    <>
      <TopBarMobile />
      <div className="relative top-[90px]">
        {/* <RoadMapSite
          name={nameBreadCrumb.name}
          titleBreadCrumb={t
          itleBreadCrumb}
        /> */}
        <div className="sm:hidden">
          <OnsPageContent />
        </div>
        <SliderProducts title="محصولات مرتبط" />
        <Footer />
      </div>
    </>
  );
}
