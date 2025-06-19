import React, { useState } from "react";
import TopBarMobile from "../../assets/Components/TopBarMobile/TopBarMobile.";
import WrapperCateguryItem from "../../assets/Components/wrapperCateguryItem/wrapperCateguryItem";
import BrandsSupplements from "../../assets/Components/BrandsSupplements/BrandsSupplements";
import ArticlesSections from "../../assets/Components/ArticlesSections/ArticlesSections";
import Footer from "../../assets/Components/Footer/Footer";
import MenuMobile from "../../assets/Components/MenuMobile/MenuMobile";
import SectionsPreeSellProducts from "../../assets/Components/SectionsPreeSellProducts/SectionsPreeSellProducts";
import DiscriptionHome from "../../assets/Components/DiscriptionHome/DiscriptionHome";
import SectionsTitle from "../../assets/Components/SectionsTitle/SectionsTitle";
import FrequentlyAskedQuestions from "../../assets/Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import MySliderWithButtons from "../../assets/Components/LastSlider/LastSlider";
import TopHomeSections from "../../assets/Components/TopHomeSections/TopHomeSections";
export default function Home() {
  const [arrayUserBaskets, setArrayUserBaskets] = useState([]);

  return (
    <>
    <div className="max-w-[1250px] ">

      <TopBarMobile />
      <div className="pt-20">

        <TopHomeSections />
      </div>
      <div className="flex flex-col gap-10   justify-center">

        <WrapperCateguryItem />
        <div className=" flex flex-col gap-10 pb-10 mt-10-custom">
          <SectionsPreeSellProducts setArrayUserBaskets={setArrayUserBaskets} />
          <div className="">
            <DiscriptionHome />
          </div>
          {/* <MySliderWithButtons/> */}
          <BrandsSupplements />
          <ArticlesSections />
          <FrequentlyAskedQuestions />
        </div>
        <div className="mb-16 sm:mb-0">
          <Footer />
        </div>
      </div>
        <div className="sm:hidden">
          <MenuMobile />
        </div>
    </div>
    </>
  );
}
