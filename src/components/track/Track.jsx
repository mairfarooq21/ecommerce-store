import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { BiHomeSmile } from "react-icons/bi";
import { TbFridge } from "react-icons/tb";
import { TbPerfume } from "react-icons/tb";
import { Link } from 'react-router-dom'


function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section>
                <div className=" container mx-auto px-5 md:py-7 mt-11" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 w-full">
                            <div className=" bg-[#F6FB7A] px-4 py-6 rounded-2xl cursor-pointer hover:underline" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <TbFridge className='w-12 h-12 mb-3 inline-block'/>
                                <Link to={'/allproducts'}>
                                    <h2 className="title-font font-medium text-lg text-gray-900 hover:" style={{ color: mode === 'dark' ? 'white' : '' }}>Electronics</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 w-full">
                            <div className="bg-[#E5D9F2] px-4 py-6 rounded-2xl cursor-pointer hover:underline" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <BiHomeSmile className='w-12 h-12 mb-3 inline-block'/>
                                <Link to={'/allproducts'}>
                                    <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 w-full">
                            <div className="bg-[#B4E380] px-4 py-6 rounded-2xl cursor-pointer hover:underline" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <svg className="text-black w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <Link to={'/allproducts'}>
                                    <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Fashion</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 w-full">
                            <div className="bg-[#BBE9FF] px-4 py-6 rounded-2xl cursor-pointer hover:underline" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                <TbPerfume className='w-12 h-12 mb-3 inline-block'/>
                                <Link to={'/allproducts'}>
                                    <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Beauty</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track