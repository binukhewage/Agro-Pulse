import React from 'react'
import buyerpic from '../images/buyerpic.jpg'


const BuyerSignup = () => {
  return (
    <div>
      <div className='flex'>
        <img src={buyerpic}
             alt="signup pic"
             className='pl-10 h-[800px]'
             />
      </div>
    </div>
  )
}

export default BuyerSignup