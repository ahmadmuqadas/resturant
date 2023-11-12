import React from 'react'
import {AnimatedTexts } from './UserImports'
import cart from '../Media/cart.png'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='home'>
      <p className='intro-par'>Try it once and Come back everyday with Delicious!</p>
<AnimatedTexts/>

<div className='cta'>

<motion.button whileTap={{ scale: 1.2 }} className='menu-cta'>
  OUR MENU
</motion.button>
<motion.img src={cart} role='button' alt="" className='cart' whileTap={{ scale: 1.2 }}></motion.img>

</div>
    </div>
  )
}

export default Home