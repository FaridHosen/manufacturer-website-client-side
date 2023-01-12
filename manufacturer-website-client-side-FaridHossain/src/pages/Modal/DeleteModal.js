import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../CustomHook/useProducts';

const DeleteModal = ({ deleting, setDeleting }) => {
    const { name, _id } = deleting;
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully Deleted');
                const rest = products.filter(product => product._id !== id);
                setProducts(rest);
                setDeleting(null)
            })
    }
    return (
        <div>

            <input type="checkbox" id="Delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl text-primary mb-3">{`Are your sure you want to delete ${name}?`}</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-error text-white font-bold'>Delete</button>
                        <label for="Delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;