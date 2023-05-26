import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  console.log(data)

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
        }`}
    >

      {data && data.length > 0 ? (
        data.map((item) => (

          <div
            key={item?.id}
            
          >
            <Card className="mt-6 w-72">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <p className="text-textColor font-semibold text-base md:text-lg">
                    {item?.title}
                  </p>
                </Typography>
                <Typography>
                  <p className="mt-1 text-sm text-black">
                    <a href={item?.calories}>Comprar Aquí</a>
                  </p>
                  <div className="w-full flex items-center justify-between">

                    
                  </div>

                </Typography>
              </CardBody>
              <CardFooter className="pt-3">
              <motion.div
                      whileTap={{ scale: 0.75 }}
                      className=" w-8 h-8 left-5 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                      onClick={() => setItems([...cartItems, item])}
                    >
                      <MdShoppingBasket className="text-white" />
                    </motion.div>
              </CardFooter>
            </Card>


          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src='https://raw.githubusercontent.com/Vetrivel-VP/foodapp-yt-mar22/12ba2c0c48b7f24db48b87aa602b2cc52514d994/src/img/NotFound.svg' className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer