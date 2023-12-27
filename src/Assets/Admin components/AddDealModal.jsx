import React, { useState } from "react";
import closeIcon from "../Media/close.png";
import { Form } from "react-router-dom";
import "../User components/StyledComponents/addDealModal.css";
import {database} from '../../FirebaseConfig'
import { ref, onValue, push  } from "firebase/database";

export async function modalAction({request}) {


  let formData = await request.formData();
  const db = database;
  const foodName = formData.get('foodName');
  const price = formData.get('price');
  const serving = formData.get('serving');
  const image = formData.get('image');
 const catagoryIndex = formData.get('catagoryIndex')


 const newFoodItem = 
  {  
    img: '',
    name: foodName,
    price: price,
    serves: serving,
    
  }
;


try {
  
  const foodsRef = ref(db, `foodCategories/${catagoryIndex}/foods`);

  await push(foodsRef, newFoodItem);

  console.log("Food item added successfully");
} catch (error) {
  console.log(error);
}

  
  return null
 }



const AddDealModal = ({toggle, catagoryIndexAndName, handleModalToggle}) => {


  const addDealModalStyle = {
    display: toggle ? 'block' : 'none'
  }

 

  
  return (
    <div className="addDealModal" style={addDealModalStyle}>
      <img src={closeIcon} onClick={handleModalToggle}   className="deal-modal-icon" alt="" />
  
      <Form className="add-food-form" method="post">
        <p className="add-food-form-cat-txt">Add Food to <b>{catagoryIndexAndName.cat && catagoryIndexAndName.cat.category}</b></p>
        <input required type="text" placeholder="Food Name..." name="foodName" className="add-to-deal-input" />
        <input required type="number" placeholder="Price" name="price" className="add-to-deal-input" />
        <input required type="number" placeholder="Serving" name="serving" className="add-to-deal-input" />
        <input type="file" className="add-to-deal-file" name="image" />
        <input 
  type="hidden" 
  name="catagoryIndex" 
  value={(catagoryIndexAndName.index || catagoryIndexAndName.index === 0) ? catagoryIndexAndName.index : ''} 
/>

        <button type="Submit" className="add-foodcat-btn">
          Add Deal
        </button>
      </Form>
    </div>
  );
};

export default AddDealModal;

