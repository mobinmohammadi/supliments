import React, { useEffect, useState } from 'react'
import TopBarMobile from '../TopBarMobile/TopBarMobile.'
import { useParams } from 'react-router-dom'
import RoadMapSite from '../RoadMapSite/RoadMapSite';
import OnsPageContent from './OnsPageContent/OnsPageContent';
import SliderProducts from '../SliderProducts/SliderProducts';
import Footer from "../Footer/Footer"

export default function OnsPageProducts() {
  const [arrayUserBasket , setArrayUserBasket ] = useState([])
  
  


  
  
  
  return (
    <div>
        <TopBarMobile arrayUserBasket={arrayUserBasket}/>
        <RoadMapSite/>
        <OnsPageContent arrayUserBasket={arrayUserBasket} setArrayUserBasket={setArrayUserBasket}/>
        <SliderProducts title="محصولات مرتبط" />
        <Footer/>
    </div>
  )
}
