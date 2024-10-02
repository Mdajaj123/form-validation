import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState({
        password: '',
        confirmPassword:""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsername({ ...username, [name]: value });
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("user"));

        if (username.password === userData.password && username.confirmPassword === userData.confirmPassword) {
            alert("Login successfully");
            navigate('/')
        }
        else if (username.password !== userData.password || username.confirmPassword !== userData.confirmPassword) {
            alert("Pls enter valid credential");
           
        }
    }
  return (
          <div className='d-flex justify-content-center align-items-center '>
              <div className='w-50 shadow p-4'>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="password" name="password" value={username.password} onChange={handleInputChange} />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={username.confirmPassword} onChange={handleInputChange} />
                      </div>
                      <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>

  )
}

export default Login
