import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div>
            <h2 className='uppercase text-center text-xl font-bold mt-8 mb-4'>admission</h2>
            <div>
                <Link to='/input'><h2 className='text-center bg-pink-300 p-3 font-bold mb-3'>College Name: <span>North Central College</span> </h2></Link>
                <Link to='/input'><h2 className='text-center bg-pink-300 p-3 font-bold mb-3'>College Name: Boston College </h2></Link>
                <Link to='/input'><h2 className='text-center bg-pink-300 p-3 font-bold mb-3'>College Name: Bijoy College </h2></Link>
                <Link to='/input'><h2 className='text-center bg-pink-300 p-3 font-bold mb-3'>College Name: Asia College </h2></Link>
                <Link to='/input'><h2 className='text-center bg-pink-300 p-3 font-bold mb-3'>College Name: Bijoy College </h2></Link>
                <Link to='/input'><h2 className='text-center bg-pink-300 p-3 font-bold mb-3'>College Name: Asia College </h2></Link>
            </div>
        </div>
    );
};

export default Admission;