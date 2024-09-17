import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { setFoodItems } from "./store/foodSlice";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(setFoodItems(data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Outlet />
        </main>
      </div>
    </AnimatePresence>
  );
}
