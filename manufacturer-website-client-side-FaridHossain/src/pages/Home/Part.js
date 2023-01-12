import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ product }) => {
    const { _id, name, img, price, minQuantity, avlbQuantity, description, } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold'>Mini Order Quantity:</span> <span className='font-bold text-xl'>20</span></p>
                <p><span className='font-bold'>Available Quantity:</span> <span className='text-xl font-bold'>{avlbQuantity}</span></p>
                <p><span className='font-bold'>Per unit price:</span> <span className='font-bold text-xl'>${price}</span></p>
                <p>{description.length >= 30 ? description.slice(0, 80) + '....' : description}</p>
                <div className="card-actions">
                    <Link to={`/buynow/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Part;