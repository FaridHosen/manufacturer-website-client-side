import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ myorder, index, handleDelete, setOrderDelete }) => {
    const { _id, product, quantity } = myorder;

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-left'>{product}</td>
            <td className='text-left'>{quantity}</td>
            <td className='text-right'>
                <Link to={`/dashboard/payment/${_id}`}> <button class="btn btn-success btn-sm text-white font-bold">Pay</button></Link>

            </td>
            <td className='text-right'>
                <label onClick={() => setOrderDelete(myorder)} for="Delete-order-modal" class="btn btn-error text-white font-bold">Delete</label>

            </td>

        </tr>
    );
};

export default TableRow;