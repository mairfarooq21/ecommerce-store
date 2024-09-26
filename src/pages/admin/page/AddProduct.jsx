import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    return (
        <div>
            <div className='flex justify-center items-center h-screen' style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className=' bg-white px-10 py-10 rounded-xl'>
                    <div className="">
                        <h1 className='text-center text-black text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={products.title}
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                            name='title'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-400 outline-none border border-black'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                            name='price'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-400 outline-none border border-black'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.imageUrl}
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-400 outline-none border border-black'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                            name='category'
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-400 outline-none border border-black'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                         value={products.description}
                         onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[25em] rounded-lg text-black placeholder:text-gray-400 outline-none border border-black'
                            placeholder='Product desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-[#0071dc] w-full text-white font-[500]  px-2 py-2 rounded-full'>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct