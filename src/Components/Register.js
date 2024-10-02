import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.name === "" || userData.email === "" || userData.password === "" || userData.confirmPassword === "") {
            alert("Please fill in all fields");
        } else if (userData.password !== userData.confirmPassword) {
            alert("Passwords do not match");
        } else if (userData.name && userData.email && userData.password === userData.confirmPassword) {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!userData.email.match(validRegex)) {
                alert('Your email is invalid');
            } else {
                alert('Registration successful');
                localStorage.setItem("user", JSON.stringify(userData));
                navigate("/login");
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='w-50 shadow p-4'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-start">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleInputChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={userData.password} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;