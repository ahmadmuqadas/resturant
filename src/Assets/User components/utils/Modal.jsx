import React, { useState } from "react";
import closeImg from "../../Media/close.png";
import carryOut from "../../Media/carryout.png";
import delivery from "../../Media/delivery.png";
import {  useNavigate } from "react-router-dom";


export const savedOrder = JSON.parse(localStorage.getItem("order"));

const Modal = ({ isModalOpen, toggleModal, foodState }) => {
  const [order, setOrder] = useState({
    FoodSubmitionMethid: "",
    orderCount: 1,
    instruction: "",
    orderedFood: null,
  });

  console.log(order);

  function orderCounterIncrease() {
    setOrder((prev) => {
      return {
        ...prev,
        orderCount: prev.orderCount + 1,
      };
    });
  }

  function orderCounterDecrease() {
    setOrder((prev) => {
        return {
            ...prev,
            orderCount: prev.orderCount > 1 ? prev.orderCount - 1 : 0
        };
    });
}

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
  };

  function FTS(FTSType) {
    setOrder((prev) => {
      return {
        ...prev,
        FoodSubmitionMethid: FTSType,
        orderedFood: foodState,
      };
    });
  }

  function handleInstruction(event) {
    const newInstruction = event.target.value;
    setOrder((prev) => {
      return {
        ...prev,
        instruction: newInstruction,
      };
    });
  }

  const navigate = useNavigate();

  function handleCheckout() {
    if (order.FoodSubmitionMethid && order.orderedFood !== '') {
      localStorage.setItem("order", JSON.stringify(order));
      console.log('fired more');
      navigate('checkout');
    } else {
      // Handle the error case, e.g., set an error state and show an error message
      console.error("Order submission method or ordered food is invalid");
  }

}


  <div className="check-btn">
    <button className="button-16 check-btn-ind" onClick={handleCheckout}>
      Checkout
    </button>
  </div>;

  //   tommowrow's to do:

  // fixing the modal orders and sending to firebase database.
  // recieving the order on Admin dashboard.
  //sending the order to gmail account.

  const borderDelivery = {
    border: order.FoodSubmitionMethid === "Delivery" ? "solid #3f3400 1px" : "",
  };

  const borderCarryOut = {
    border: order.FoodSubmitionMethid === "Carry Out" ? "solid#3f3400 1px" : "",
  };
  return (
    <div className="modal" style={modalStyle}>
      <div className="delievery-wrapper">
        <div
          className="delivery"
          style={borderDelivery}
          onClick={() => FTS("Delivery")}
        >
          <img src={delivery} alt="" />
          <p>Delivery</p>
        </div>
        <p>Or</p>
        <div
          className="carryOut"
          style={borderCarryOut}
          onClick={() => FTS("Carry Out")}
        >
          <img src={carryOut} alt="" />
          <p>Carry Out</p>
        </div>
      </div>
      <div className="count">
        <p className="order-C-txt">
          {typeof foodState === "string" ? foodState : null}
        </p>

        <button className="button-16" onClick={orderCounterDecrease}>
          -
        </button>
        <p className="counter">-{order.orderCount}-</p>
        <button className="button-16" onClick={orderCounterIncrease}>
          +
        </button>

        <div className="instructios">
          <input
            type="text"
            placeholder="Please Add Your Instructions Here.."
            value={order.instruction}
            name="instruction"
            onChange={handleInstruction}
            className="instruction"
          />
          <div className="check-btn">
            <button className="button-16 check-btn-ind" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
      <img
        src={closeImg}
        className="closeImg"
        onClick={toggleModal}
        alt="close"
      />
    </div>
  );
};

export default Modal;