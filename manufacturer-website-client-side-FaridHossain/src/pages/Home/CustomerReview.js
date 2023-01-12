import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Loading from '../Loading/Loading';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/review`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);
    return (
        <div className='px-12 py-8'>
            <h1 className='mt-5 mb-3 text-center text-green-600 text-3xl font-bold'>Total Reviews: {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center'>
                {
                    reviews.length === 0 ? <p className='text-center'><Loading></Loading></p> : reviews.map(review => <div key={review._id} className='bg-slate-600 p-4 text-white' data-aos="fade-down-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <div data-aos="fade-down-right"  data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                            <p className='flex justify-center items-center gap-1'><span>{review.value}</span> <span className='text-yellow-300'><FaStar /></span></p>
                            <p>{review.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;