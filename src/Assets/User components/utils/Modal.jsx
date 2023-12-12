import React, { useState } from 'react'
import closeImg from '../../Media/close.png'
import carryOut from '../../Media/carryout.png'
import delivery from '../../Media/delivery.png'


const Modal = ({isModalOpen, toggleModal}) => {

    const [order, setOrder] = useState({
        FoodSubmitionMethid: '',
        orderCount: 0,
        instruction: '',
    })


      const modalStyle = {
        display: isModalOpen ? 'block' : 'none'
      }


      function FTS(FTSType) {
        setOrder(() => {
            return {
                FoodSubmitionMethid: FTSType,
            }
        })
      }

      console.log(order);
  return (
    
         <div className='modal' style={modalStyle}>
        <div className="delievery-wrapper">
          <div className="delivery"  onClick={() => FTS('Delivery')}>
           <img src={delivery} alt="" />
           <p>Delivery</p>
          </div>
          <p>Or</p>
          <div className="carryOut" onClick={() => FTS('Carry Out')}>
            <img src={carryOut} alt="" />
            <p>Carry Out</p>
          </div>
        </div>
        <div className="count">
          <p className='order-C-txt'>Select Your Order Count</p>
          <button className='button-16'>-</button>
        <p className='counter'>-1-</p>
          <button className='button-16'>+</button>


        <div className="instructios">
          <input type="text" placeholder='Please Add Your Instructions Here..' />
        <div className='check-btn'>
        <button className='button-16 check-btn-ind'>Checkout</button>
          <button className='button-16 check-btn-ind'>Add More</button>
        </div>
        </div>


        </div>
        <img src={closeImg} className='closeImg' onClick={toggleModal} alt="close"/>
      </div>

  )
}

export default Modal