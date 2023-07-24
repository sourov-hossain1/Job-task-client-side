import React, { useEffect, useState } from 'react';

const MyCollege = () => {

    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])

    return (
        <>
            <h2 className='text-center font-bold text-xl uppercase mt-8 mb-4'>my college</h2>
            <div className='mb-6'>
                {
                    infos.map(info => <div className='bg-slate-200 p-6 ms-12 me-12'>
                        <p>1. Name: {info.name}</p>
                        <p>2. Email: {info.email}</p>
                        <p>3. Address: {info.address}</p>
                        <p>4. Phone: {info.phone}</p>
                    </div>)
                }
            </div>
        </>
    );
};

export default MyCollege;