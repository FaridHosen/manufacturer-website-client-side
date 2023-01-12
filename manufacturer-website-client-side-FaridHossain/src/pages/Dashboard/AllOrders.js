import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/order`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, []);
    return (
        <div>
            <h4 className='mt-5 mb-3'><span className='text-2xl font-bold'>All orders:</span> <span className='text-3xl font-bold text-purple-900'>{allOrders.length}</span></h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    allOrders.length === 0 ? <p className='text-center'><Loading></Loading></p> : allOrders.map(order => <div key={order._id} className='bg-slate-600 p-4 text-white'>
                        <div> <p>{order.product}</p>
                            <p>{order.name}</p>
                            <p>{order.email}</p></div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllOrders;