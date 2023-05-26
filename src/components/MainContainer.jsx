import Reactt, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import CarouselBack from './CarouselBack'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import RowContainer from "./RowContainer.jsx";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import Shoes from './Shoes';
import Footer from './Footer'
const Maincontainer = () => {

  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
 

  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <CarouselBack/>

      

      <MenuContainer />
      <Shoes/>
      <Footer/>

      {cartShow && <CartContainer />}
    </div>
  )
}

export default Maincontainer