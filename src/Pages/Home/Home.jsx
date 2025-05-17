import React from 'react'
import TopBarMobile from '../../assets/Components/TopBarMobile/TopBarMobile.'
import WrapperCateguryItem from "../../assets/wrapperCateguryItme/wrapperCateguryItem"
import BrandsSupplements from '../../assets/Components/BrandsSupplements/BrandsSupplements'
import ArticlesSections from '../../assets/Components/ArticlesSections/ArticlesSections'
import Footer from '../../assets/Components/Footer/Footer'
import MenuMobile from '../../assets/Components/MenuMobile/MenuMobile'
import SectionsPreeSellProducts from "../../assets/Components/SectionsPreeSellProducts/SectionsPreeSellProducts"
import Slider from '../../assets/Components/Slider/Slider'
export default function Home() {
  return (
    <>
      <TopBarMobile></TopBarMobile>
          <Slider />
          <WrapperCateguryItem />
          <div className=" container-custom pt-10 flex flex-col gap-3 pb-10 mt-10-custom">
            <SectionsPreeSellProducts />
    
            <BrandsSupplements />
            <ArticlesSections />
          </div>
          <div className="mb-32">
    
          <Footer/>
          </div>
          <MenuMobile/>
    </>
  )
}
