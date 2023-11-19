import React from 'react'
import dealImg from './../Media/deal.jpg' 
import dealImg2 from './../Media/deal2.jpg'
import serving from '../Media/delicious.png'
import { motion } from 'framer-motion';
const foodCategories = [
  {
    category: 'Appetizers',
    foods: [
      { name: 'Bruschetta', price: 6.99, serves: 2, img: dealImg },
      { name: 'Spinach Artichoke Dip', price: 8.99, serves: 4, img: dealImg },
      { name: 'Spinach Artichoke Dip', price: 8.99, serves: 4, img: dealImg2 },

    ],
  },
  {
    category: 'Salads',
    foods: [
      { name: 'Caesar Salad', price: 7.99, serves: 2, img:dealImg  },
      { name: 'Greek Salad', price: 9.99, serves: 2, img:dealImg  },
    ],
  },
  {
    category: 'Soups',
    foods: [
      { name: 'Tomato Basil Soup', price: 5.99, serves: 2, img:dealImg  },
      { name: 'Chicken Noodle Soup', price: 6.99, serves: 2, img:dealImg  },
    ],
  },
  {
    category: 'Main Courses',
    foods: [
      { name: 'Grilled Salmon', price: 18.99, serves: 1, img:dealImg  },
      { name: 'Chicken Alfredo Pasta', price: 15.99, serves: 2, img:dealImg  },
    ],
  },
  {
    category: 'Steaks',
    foods: [
      { name: 'Ribeye Steak', price: 22.99, serves: 1, img:dealImg  },
      { name: 'Filet Mignon', price: 24.99, serves: 1, img:dealImg  },
    ],
  },
  {
    category: 'Burgers',
    foods: [
      { name: 'Classic Cheeseburger', price: 10.99, serves: 1, img:dealImg  },
      { name: 'Vegetarian Burger', price: 12.99, serves: 1, img:dealImg  },
    ],
  },
  {
    category: 'Pizzas',
    foods: [
      { name: 'Margherita Pizza', price: 14.99, serves: 2, img:dealImg  },
      { name: 'Pepperoni Pizza', price: 16.99, serves: 2, img: dealImg },
    ],
  },
  {
    category: 'Desserts',
    foods: [
      { name: 'Chocolate Lava Cake', price: 7.99, serves: 2, img: dealImg },
      { name: 'New York Cheesecake', price: 9.99, serves: 2, img: dealImg },
    ],
  },
  {
    category: 'Beverages',
    foods: [
      { name: 'Soda', price: 2.49, serves: 1, img:dealImg  },
      { name: 'Iced Tea', price: 2.99, serves: 1, img: dealImg },
    ],
  },

  {
    category: 'Shawarmas',
    foods: [
      { name: 'Turkish Shawarma', price: 2.49, serves: 1, img:dealImg  },
 
    ],
  },
];



const Deals = () => {

  const categories = foodCategories.map((category) => {
    return (
      <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }} // Adjust the delay as needed
      viewport={{ once: true }}

      key={category.category} className='foods-cat'>
        <h2 className='cat-name'>{category.category}</h2>
          <div className='food-wrapper'>
          {category.foods.map((food) => (
            <div className='foods' key={food.name}>
         <div className='food-img-wrapper'>
          <img src={food.img} alt="" className='deal-img' />
    <span className='serving-span'>
    <img src={serving} alt="" className='serving-img' />
          <p key={food.name} className='food-item serving'>X {food.serves}</p>
    </span>
          </div> 

         <div className="food-item-wrapper">
         <p key={food.name} className='food-item food-name'>{food.name}</p>
          <p key={food.name} className='food-item food-price'>{food.price}</p>
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