import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap '>
            <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image className='absolute object-cover rounded-md z-10 hover:opacity-0 transotion-opacity easy duration-500'
                        src="https://images.pexels.com/photos/30482791/pexels-photo-30482791/free-photo-of-graceful-tricolored-heron-wading-in-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=''
                        fill
                        sizes="28vw"
                    />
                    <Image className='absolute object-cover rounded-md'
                        src="https://images.pexels.com/photos/20259613/pexels-photo-20259613/free-photo-of-model-in-dress-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=''
                        fill
                        sizes="28vw" />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium' >Product Name</span>
                    <span className='font-semibold'>$40</span>
                </div>
                <div className='text-sm text-gray-500'>My Description</div>
                <button className='rounded-2xl w-max ring-1 ring-phunar text-phunar py-2 px-4 text-xs hover:bg-phunar hover:text-white  '>Add to Cart</button>
            </Link>
        </div>
    );
}

export default ProductList;
