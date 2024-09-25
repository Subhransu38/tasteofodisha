import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import NotFound from "../assets/NotFound.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../store/cartSlice";

export default function RowContainer({ flag, data, scrollValue }) {
  const rowContainer = useRef();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    let updatedCartItems;
    if (existingItem) {
      // If item exists, increase its quantity
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
    } else {
      // If item does not exist, add it to the cart with quantity 1
      updatedCartItems = [...cartItems, { ...item, qty: 1 }];
    }

    // Dispatch the updated cart items to the Redux store
    dispatch(setCartItems(updatedCartItems));

    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-2 md:my-0 ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-full min-w-[225px] md:w-300 h-auto bg-cardOverlay rounded-lg py-4 shadow-xl px-4 my-2 md:my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-start relative"
          >
            <div className="w-full h-48 flex items-center justify-center">
              <motion.div
                className="w-full h-full rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item?.imageURL}
                  alt={item?.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-start mt-4 justify-between">
              <p className="text-textColor font-semibold text-base md:text-lg truncate mb-2">
                {item?.title}
              </p>
              <div className="w-full flex items-center justify-between">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">₹</span> {item?.price}
                </p>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md hover:bg-orange-600"
                  onClick={() => addToCart(item)}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="Not Found" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
}
