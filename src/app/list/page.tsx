import Image from 'next/image';
import React from 'react';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* Campaign */}
      <div className=' hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 50% off on <br/> Selected Products</h1>
          <button className='rounded-3xl bg-phunar text-white w-max px-5 py-3 text-sm'>Buy Now</button>        
        </div>
        <div className='relative w-1/3'>
          <Image src="/woman.png"
          fill
          className='object-contain' 
          alt=''
          />
        </div>
      </div>
      {/* Filter */}
      <Filter/>
      {/* Products */}
      <h1 className='text-xl font-semibold mt-12'>Shoes for you</h1>
      <ProductList/>
    </div>
  );
}

export default ListPage;
