import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import RowUser from './RowUser';

const AllUsers = () => {
    // const [allusers, setAllusers] = useState([]);
    // useEffect(() => {
    //     const url = `http://localhost:5000/user`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setAllusers(data))

    // }, []);
    const { data: allusers, isLoading, refetch } = useQuery('allusers', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='mt-5 mb-3 text-center text-green-600 text-3xl font-bold'>Total users: {allusers.length}</h4>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>User</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allusers.length === 0 ? <p className='text-center'><Loading></Loading></p> : allusers.map((user, index) => <RowUser key={user._id} user={user} index={index} refetch={refetch}></RowUser>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;