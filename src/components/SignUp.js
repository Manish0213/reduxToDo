import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupUser } from '../app/features/auth/authSlice';

const SignUp = () => {
    const [credientials, setCredientials] = useState({name: "", email: "", password: "", cPassword: ""});

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
        console.log(credientials);
        setCredientials({name: "", email: "", password: "", cPassword: ""});
        dispatch(signupUser(credientials));
      }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" value={credientials.name} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={credientials.email} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="exampleInputPassword1" value={credientials.password} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="cPassword" id="exampleInputPassword1" value={credientials.cPassword} onChange={handleOnChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default SignUp
