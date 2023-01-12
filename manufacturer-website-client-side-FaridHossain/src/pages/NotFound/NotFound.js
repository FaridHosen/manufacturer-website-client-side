import React from 'react';
import Opps from '../../images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center not-found'>
            <img className='' src={Opps} alt="" />
        </div>
    );
};

export default NotFound;