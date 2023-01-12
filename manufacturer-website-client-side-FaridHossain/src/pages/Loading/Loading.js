import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center ml-[600px] items-center mt-20 mb-24'>
            <button className="btn btn-error text-black bg-transparent font-bold loading  border-0">loading</button>
            {/* <button className="btn btn-square loading"></button> */}
        </div>
    );
};

export default Loading;