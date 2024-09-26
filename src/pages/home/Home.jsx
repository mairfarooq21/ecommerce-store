import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Banner from '../../components/banner/Banner'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center">
        <Link to={'/allproducts'}>
          <button className=' bg-white hover:bg-black hover:text-white duration-300 px-5 py-2 rounded-full ' style={{ fontFamily: 'Poppins, sans-serif', border: '1px solid black' }} >See more</button>
        </Link>
      </div>
      <Track />
      <Banner />
    </Layout>
  )
}

export default Home