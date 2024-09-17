import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import RowContainer from "./RowContainer";
import CartContainer from "./CartContainer";

export default function MainContainer() {
  const foodItems = useSelector((state) => state.food.foodItems);
  const cartShow = useSelector((state) => state.cart.cartShow);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    setScrollValue(0);
  }, [scrollValue]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100">
      <HomeContainer />
      <section className="w-full mt-8 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-3xl font-bold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-36 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Bestsellers
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(-200)}
              className="w-10 h-10 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-2xl text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(200)}
              className="w-10 h-10 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-2xl text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "bestsellers")}
        />
      </section>
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
}
