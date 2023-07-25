import React, { useEffect, useState } from 'react';
import './College.css'

const College = () => {

    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/routeCollege')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <>
            <h2 className='uppercase text-center mt-8 mb-4 font-bold'>all colleges</h2>
            <div className='college-card'>
                {
                    colleges.map(college =>
                        <div className="card w-62 bg-base-100 shadow-xl">
                            <figure><img className='h-[200px] w-[330px]' src={college.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{college.name}</h2>
                                <p>Admission Date:{college.admission}</p>
                                <p>Rating: {college.rating}</p>
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

export default College;