import React, { useEffect, useState } from "react";
import { AnimatedTexts } from "./UserImports";
import cart from "../Media/cart.png";
import { motion } from "framer-motion";
import Deals, { loader } from "./Deals";
import GetApp from "./GetApp";
import { Link } from "react-router-dom";

const Home = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const orderJson = localStorage.getItem("order");

    // Check if the retrieved item is not null or undefined
    if (orderJson) {
      // Convert the JSON string to a JavaScript object
      const orderObject = JSON.parse(orderJson);

      // Update the state with the JavaScript object
      setOrderData(orderObject);
    }
  }, []);

  return (
    <>
      <div className="home">
        <p className="intro-par">
          Try it once and Come back everyday with Delicious!
        </p>
        <AnimatedTexts />

        <div className="cta">
          <motion.button whileTap={{ scale: 1.2 }} className="menu-cta">
            OUR MENU
          </motion.button>

          <Link to='checkout'>
          <motion.div
            className="card-wrapper"
            whileTap={{ scale: 1.2 }}
            role="button"
          >
            <img src={cart} alt="card" className="cart"></img>
            {orderData ? (
              <p className="card-count">{orderData.orderCount}</p>
            ) : null}
          </motion.div>
          </Link>
        </div>
      </div>
      <Deals />

      <GetApp />
    </>
  );
};

export default Home;
