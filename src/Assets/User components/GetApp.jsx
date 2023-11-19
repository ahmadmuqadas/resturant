import React from 'react'
import playstore from '../Media/playstore.png'
import appStore from '../Media/app-store.png'

const GetApp = () => {
  return (
    <div className='get-app-wrapper'>
        <h2>Get the App!</h2>
        <p>App is where the fun is! it's Easy, Fast and Convenient.</p>
        <div className='app-btn'>
            <button className='playstore-btn'> <img src={playstore} className='platstore-img' alt="" />Playstore</button>
            <button className='applestore-btn'><img src={appStore} className='platstore-img' alt="" />Apple Store</button>
        </div>
    </div>
  )
}

export default GetApp