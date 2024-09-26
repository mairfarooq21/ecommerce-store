import React from 'react'
import Banner from '../../assets/kitchen.jpeg'
import Banner2 from '../../assets/shirts2.jpeg'
import Banner3 from '../../assets/beauty.jpeg'
import Carousel from '../../components/heroSection/Carousel'

const slides = [
  Banner,
  Banner2,
  Banner3
]

function HeroSection() {
  return (
    <div className='w-full h-full' >
      <Carousel>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Carousel>
    </div>
  )
}

export default HeroSection