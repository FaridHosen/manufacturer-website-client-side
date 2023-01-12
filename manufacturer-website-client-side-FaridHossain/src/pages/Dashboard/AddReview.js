import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handleReview = event => {
        event.preventDefault();
        const value = event.target.value.value;
        const description = event.target.description.value;
        const addReviews = { value, description };

        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addReviews)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Review successfully added.')
                event.target.reset()
            })
    }
    return (
        <div>
            <h1 className='mt-5 mb-3 text-center text-green-600 text-3xl font-bold'>Write Your Review</h1>
            <div>
                <form onSubmit={handleReview} className='grid grid-cols-1 gap-4 justify-items-center'>
                    <input type="text" name='value' placeholder="Rating Value" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='description' placeholder='Description' className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Add' className="btn input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;