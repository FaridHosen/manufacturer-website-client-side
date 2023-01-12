import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useProducts from '../CustomHook/useProducts';
import { toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';

const BuyNow = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [products] = useProducts();
    const [product, setProduct] = useState({});
    const [relode, setRelode] = useState(false);
    const { _id, name, img, price, minQuantity, avlbQuantity, description } = product;
    const [order, setOrder] = useState(20);


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setRelode(!relode)
            })
    }, [id, relode, product]);


    const handleIncrease = (product) => {
        if (avlbQuantity < 1) {
            return toast("Available quantity not less than 1");
        } else {

            setOrder(order + 1)
        }
        const exist = products.find(pd => pd._id === product._id)
        if (exist) {
            exist.avlbQuantity = parseInt(exist.avlbQuantity) - 1;
            const increseQuantity = exist.avlbQuantity;

            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ increseQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    let errorss;
    const handleReduce = (product) => {
        if (order <= 19) {
            return toast("Minimum order quantity 20");
        } else {

            setOrder(order - 1)
        }
        const exist = products.find(pd => pd._id === product._id)
        if (exist) {
            exist.avlbQuantity = parseInt(exist.avlbQuantity) + 1;
            const reduceQuantity = exist.avlbQuantity;
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ reduceQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }


    const handlePurchase = event => {
        event.preventDefault();
        const product = event.target.product.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const purchase = { product, name, email, quantity, price, address, phone }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    toast(`${product} Purchase Successfully`);
                }
                else {
                    toast.error(`${product} Already Purchased`)
                }
                event.target.reset();
            })
    }
    return (
        <div className='py-12'>
            <div className="card w-96 bg-base-100 mx-auto shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-bold'>Minimum Quantity:</span> <span className='text-xl font-bold'>20</span></p>
                    <p><span className='font-bold'>Available Quantity:</span> <span className='text-xl font-bold'>{avlbQuantity}</span></p>
                    <p><span className='font-bold'>Order Quantity:</span> <span className='font-bold text-xl'>{order}</span></p>
                    <p><button onClick={() => handleReduce(product)} className='btn btn-sm text-3xl'>-</button><span className='text-2xl font-bold mx-3'> </span><button onClick={() => handleIncrease(product)} className='btn btn-sm text-3xl'>+</button></p>
                    {errorss}
                    <p><span className='font-bold'>Per unit price:</span> <span className='font-bold text-xl'>${price}</span></p>
                    <p className='font-bold text-indigo-400'>{description}</p>
                </div>
                <label disabled={order < 20 || avlbQuantity < 1} for="confirm_purchase" className="btn modal-button"><span className='pr-3 text-2xl'><FaShoppingCart /></span> go to purchase</label>
            </div>

            <div>
                <input type="checkbox" id="confirm_purchase" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center'>
                            <input type="text" name='product' disabled value={name} className="input input-bordered text-xl font-bold w-full max-w-xs" />
                            <input type="text" name='name' value={user.displayName} className="input input-bordered w-full max-w-xs text-xl font-bold" />
                            <input type="email" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs text-xl font-bold" />
                            <input type="text" name='quantity' value={'Selected Quantity ' + order} className="input input-bordered text-xl font-bold w-full max-w-xs" />
                            <input type="text" name='price' value={'$' + price * order} className="input input-bordered w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value='Confirm' className="btn btn-primary input-bordered w-full max-w-xs" />
                        </form>
                        <div className="modal-action">
                            <label for="confirm_purchase" className="btn">Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;