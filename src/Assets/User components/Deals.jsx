import React, { useEffect, useLayoutEffect, useState } from 'react'
import serving from '../Media/delicious.png'
import { motion } from 'framer-motion';
import { database } from '../../FirebaseConfig';
import { get, ref } from 'firebase/database';
import { useLoaderData } from 'react-router-dom';




async function fetchDatabase() {
  const dbRef = ref(database);
  try {
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const retData = snapshot.val();
      return retData;
    } else {
    
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}


export function loader() {
  return fetchDatabase();
}






const Deals = () => {
 


const menu = useLoaderData();

const menuArray = menu.foodCategories;

  const categories = menuArray.map((category) => {

    return (
      
      <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: .5 }} 
      viewport={{ once: true }}
       className='foods-cat'>
        <h2 className='cat-name'>{category.category}</h2>
          <div className='food-wrapper'>
          {category.foods.map((food) => (
            <div className='foods'>
         <div className='food-img-wrapper'>
          <img src={food.img} alt="" className='deal-img' />
    <span className='serving-span'>
    <img src={serving} alt="" className='serving-img' />
          <p  className='food-item serving'>X {food.serves}</p>
    </span>
          </div> 

         <div className="food-item-wrapper">
         <p  className='food-item food-name'>{food.name}</p>
          <p className='food-item food-price'>{food.price}</p>
          <button className='select-btn'>Select</button>
        
         </div>
          </div>
        
        ))}
          </div>
        
      </motion.div>
    );
  });
 
  return (
    <div className='deals-wrapper'>
      {categories}
      </div>
  )
}

export default Deals