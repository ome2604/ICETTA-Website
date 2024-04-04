import React from 'react'
import './App.css'


export const CarouselItem = ({item}) => {
  return (
    <div className='Carousel-Item'>
        <img className='Carousel-img' src={item.images}/>
    </div>
  )
}

export default CarouselItem;
