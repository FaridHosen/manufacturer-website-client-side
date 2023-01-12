import React from 'react';
import useProducts from '../CustomHook/useProducts';
import Loading from '../Loading/Loading';
import Part from './Part';

const Parts = () => {
    const [products] = useProducts();
    return (
        <div className='px-12 py-8'>
            <h1 className='text-center text-indigo-500 font-bold text-3xl' data-aos="flip-left" data-aos-duration="1000"  data-aos-easing="ease-out-cubic">Choose your parts for Purchase</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' 
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            >
                {
                    products.length === 0 ? <p className='text-center'><Loading></Loading></p> : products.slice(-6).map(product =>
                        <Part
                            key={product._id}
                            product={product}
                        ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;