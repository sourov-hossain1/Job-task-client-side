import React from 'react';

const Input = () => {

    const handleInfo = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.photo.value;
        const subject = form.name.value;
        const email = form.sellerName.value;
        const phone = form.sellerEmail.value;
        const address = form.cata.value;
        const birth = form.price.value;
        const image = form.rating.value;

        const student = { name,subject, email, phone, address, birth, image};
        console.log(student);

        fetch('http://localhost:5000/info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
            
        })
        .then(res => res.json())
        .then(data => {
            // refetch();
            console.log(data)
        })

    }

    return (
        <div className='mb-6'>
            <h2 className='text-center text-xl font-bold mt-8 mb-3 uppercase'>give your information</h2>
            <form onSubmit={handleInfo}>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Your Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Subject" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="sellerName" placeholder="Your Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerEmail" placeholder="Phone Number" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cata" placeholder="Address" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Date of Birth" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="submit" className="btn btn-block" />
            </form>
        </div>
    );
};

export default Input;