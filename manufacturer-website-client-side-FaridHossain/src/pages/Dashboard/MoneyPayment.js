import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ChechoutForm from './ChechoutForm';

const stripePromise = loadStripe('pk_test_51L3gF3GgLrvBkIM2fM9eN5YIggt2tGBxWwoDz2GxFSJ8a0uru4CIJoIeHjVZoWAEf0T5c2EM4YS5GU9z3N1LpGMk00ztDodrvr');


const MoneyPayment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 className='text-primary text-3xl font-bold'>Hello {order.name}</h2>
                    <h2 class="card-title">Pay for {order.product}</h2>
                    <p>Please Pay: {order?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <ChechoutForm order={order}></ChechoutForm>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default MoneyPayment;