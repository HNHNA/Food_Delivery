import React, { useState } from 'react'
import './FoodItem.css'


const FoodItem = ({ id, name, price, description, image }) => {
  return (

    // const [itemCount, setItemCount] = useState(0)

    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {/* {
          !itemCount
          ? 
        } */}
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}
import './FoodItem.css'
import { assets } from '../../assets/assets'


export default FoodItem
