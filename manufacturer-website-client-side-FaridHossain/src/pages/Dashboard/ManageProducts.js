import React, { useState } from 'react';
import useProducts from '../CustomHook/useProducts';
import Loading from '../Loading/Loading';
import DeleteModal from '../Modal/DeleteModal';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const [deleting, setDeleting] = useState(null);


    return (
        <div>
            <h4 className='mt-5 mb-3'><span className='text-2xl font-bold'>Total Manage Products:</span> <span className='text-3xl font-bold text-purple-900'>{products.length}</span></h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    products.length === 0 ? <p className='text-center'><Loading></Loading></p> : products.map(order => <div key={order._id} className='bg-slate-600 p-4 text-white'>
                        <div>
                            <img src={order.img} alt="" />
                            <div className='mt-4'>
                                <p>{order.name}</p>
                                <p>{order.email}</p>
                                <p><label onClick={() => setDeleting(order)} for="Delete-confirm-modal" class="btn btn-error block mx-auto mt-6 font-bold"><span className='text-white font-bold block mt-4'>Delete</span></label></p>

                            </div>
                        </div>
                    </div>)
                }
            </div>
            {
                deleting && <DeleteModal deleting={deleting} setDeleting={setDeleting}></DeleteModal>
            }
        </div>
    );
};

export default ManageProducts;