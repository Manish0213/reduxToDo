import React, { useState } from 'react'
import { loginUser } from '../app/features/auth/authSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credientials, setCredientials] = useState({email: "", password: ""});
    const navigate = useNavigate();
    const loggedUser = useSelector(state => state.auth.loggedUser);
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const {name, value} = event.target;
  
        setCredientials((prevData) => ({
          ...prevData,
          [name]: value
        }))
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        setCredientials({email: "", password: ""});
        dispatch(loginUser(credientials));
        navigate('/');
      }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={credientials.email} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="exampleInputPassword1" value={credientials.password} onChange={handleOnChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login
