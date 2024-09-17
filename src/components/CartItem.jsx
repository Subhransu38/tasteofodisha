import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { setCartItems } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartItem({ item }) {
  const [qty, setQty] = useState(item.qty);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const updateQty = (action, id) => {
    let updatedItems = cartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            qty: action === "add" ? cartItem.qty + 1 : cartItem.qty - 1,
          };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.qty > 0); // Remove items with qty 0

    dispatch(setCartItems(updatedItems));
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    setQty(item.qty);
  }, [item.qty]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          ₹ {parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
}
