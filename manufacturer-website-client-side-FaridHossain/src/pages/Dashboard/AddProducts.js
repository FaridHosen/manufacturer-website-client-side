import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);

    const handleAdded = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const minQuantity = event.target.minQuantity.value;
        const avlbQuantity = event.target.avlbQuantity.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const addItem = { name, email, price, minQuantity, avlbQuantity, description, img };
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Added.');
                event.target.reset()
            })
    }

    return (
        <div>
            <h1 className='mt-5 mb-3 text-center text-green-600 text-3xl font-bold'>Add products</h1>
            <div>
                <form onSubmit={handleAdded} className='grid grid-cols-1 gap-4 justify-items-center'>
                    <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' value={user.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    <input type="text" disabled name='minQuantity' value='Min order quantity 20' className="input input-bordered text-xl font-bold w-full max-w-xs" />
                    <input type="text" name='avlbQuantity' placeholder="Available Quantity more than 20" className="input input-bordered w-full max-w-xs" />
                    <textarea name='description' className="textarea textarea-bordered w-full max-w-xs" placeholder="Description"></textarea>
                    <input type="text" name='img' placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Add Item' className="btn input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;