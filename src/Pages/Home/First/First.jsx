import React, { useEffect, useState } from 'react';
import './First.css'

const First = () => {

    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <>
            <h2 className='text-xl text-center mt-6 mb-3 font-bold uppercase'>Colleges</h2>
            <div className='card-section'>
                {
                    colleges.map(college =>
                        <div className="card w-62 bg-base-100 shadow-md">
                            <figure><img className='h-[200px] w-[330px]' src={college.image} alt="Shoes" /></figure>
                            <div className="card-body">
                            {/* className='h-[200px] w-[330px]'  */}
                                <h2 className="card-title">{college.name}</h2>
                                <p>Admission Date:{college.admission}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline border-0 border-b-4 mt-2">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default First;