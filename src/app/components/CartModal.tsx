"use client"
import Image from 'next/image';
import React from 'react';

const CartModal = () => {
    const cartItems = true

    return (
        <div className=' w-max absolute p-4 rounded-sm bg-white top-12 right-0 flex flex-col gap-6 z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
            {!cartItems ? (
                <div>Cart is empty</div>
            ) : (
                <>
                    <h2 className='text-xl'>Shopping Cart</h2>
                    <div className='flex flex-col gap-8'>
                        {/* ITEM */}
                        <div className='flex gap-4'>
                            <Image src="https://images.pexels.com/photos/30482791/pexels-photo-30482791/free-photo-of-graceful-tricolored-heron-wading-in-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                alt=''
                                width={72}
                                height={96}
                                className='object-cover rounded-md'
                            />
                            <div className='flex flex-col justify-between w-full'>
                                {/* Top */}
                                <div className=''>
                                    {/* title */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>Product Name</h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>$49.99</div>
                                    </div>
                                    {/* description */}
                                    <div className='text-sm text-gray-500'>
                                        <h3>available</h3>
                                    </div>
                                </div>
                                {/* bottom */}
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty.2</span>
                                    <span className='text-blue-500'>Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom fragments */}
                    <div className=''>
                        <div className='flex items-center justify-between font-semibold  '>
                            <span className=''>SubTotal</span>
                            <span className=''>$49</span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb-4'>
                            Shipping and taxes collected at checkout
                        </p>
                        <div className='flex justify-between text-sm'>
                            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                            <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}

export default CartModal;
