import React, { useContext } from 'react'
import Banner1 from '../../assets/shirts.jpeg'
import Banner2 from '../../assets/makeup.jpeg'
import { Link } from 'react-router-dom'


function Banner() {

    return (
        <div>
            <div className=' container mx-auto px-4 mt-5 mb-10 ' style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className='container'>
                    <div style={{
                            backgroundImage: `url(${Banner1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '340px'
                            }}  
                        className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-2xl'>
                        <div className='p-6 sm:p-8'>
                            <p className='text-black text-2xl font-poppins'>Casual Wear</p>
                            <h1 className='text-black text-4xl lg:text-6xl font-bold font-poppins'>20% off</h1>
                            <Link to={'/allproducts'}>
                                <button className=' bg-black hover:scale-105 duration-300 px-5 py-2 rounded-full mt-6' >Shop now</button>
                            </Link>
                        </div>                       
                    </div>
                </div>
            </div>

            <div className=' container mx-auto px-4 mt-5 mb-10 ' style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className='container'>
                    <div style={{
                            backgroundImage: `url(${Banner2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '340px'
                            }}  
                        className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-2xl'>
                        <div className='p-6 sm:p-8'>
                            <p className='text-black text-2xl font-poppins'>Beauty Products</p>
                            <h1 className='text-black text-4xl lg:text-6xl font-bold font-poppins'>15% off</h1>
                            <Link to={'/allproducts'}>
                                <button className=' bg-black hover:scale-105 duration-300 px-5 py-2 rounded-full mt-6' >Shop now</button>
                            </Link>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner