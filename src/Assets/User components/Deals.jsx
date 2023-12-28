import React, { useState } from 'react'
import serving from '../Media/delicious.png'
import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';
import Modal from './utils/Modal';
import { fetchDatabase } from './utils/FetchDealsDatabase';




export function loader() {
  return fetchDatabase();
}



const Deals = () => {
const menu = useLoaderData();

const [isModalOpen, SetIsModalOpen] = useState(false);
const [foodState, setFoodState] = useState(null);

      
function toggleModal(foodName) {
  SetIsModalOpen((prev) => !prev)
 
  setFoodState(foodName);

}



const menuArray = menu.foodCategories;

// console.log(menuArray[0].foods['NmjSlz05QXb5gjkW1mZ']);

  const categories = menuArray.map((category) => {

    return (
      
      <motion.div
      key={category.name}  
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
      className='foods-cat'
    >
      <h2 className='cat-name'>{category.category}</h2>
      <div className='food-wrapper'>
        {category.foods && Object.entries(category.foods).map(([key, food]) => (
          <div key={key} className='foods'>
            <div className='food-img-wrapper'>
              <img src={food.img} alt="" className='deal-img' />
              <span className='serving-span'>
                <img src={serving} alt="" className='serving-img' />
                <p className='food-item serving'>X {food.serves}</p>
              </span>
            </div>
            <div className="food-item-wrapper">
              <p className='food-item food-name'>{ food.name}</p>
              <p className='food-item food-price'>{`$${food.price}`}</p>
              <button className='select-btn' onClick={() => toggleModal(food.name)}>Select</button>
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
     <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} foodState={foodState} />
      </div>
  )
}

export default Deals