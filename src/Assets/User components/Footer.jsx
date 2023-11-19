import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    

console.log(currentYear);

  return (
    <footer><p>&copy;Copyright Delicious. All rights reserved. {currentYear} </p></footer>
  )
}

export default Footer