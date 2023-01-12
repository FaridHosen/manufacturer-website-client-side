import React from 'react';

const DeleteOrderModal = ({ orderDelete, handleDelete }) => {
    const { _id, product } = orderDelete;
    return (
        <div>


            <input type="checkbox" id="Delete-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl text-secondary">{`Are You sure you want to delete ${product}?`}</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-error font-bold text-white'>Confirm Delete</button>
                        <label for="Delete-order-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;