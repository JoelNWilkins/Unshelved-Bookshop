import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../utils";

function SignIn({ setName, setToken }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(values => ({...values, [name]: value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    
    const response = await postData("/api/login", formData);
    if (response === undefined) {
      alert("Could not connect to the login server. Please try again later.")
    } else if ("token" in response) {
      setName(formData.username);
      setToken(response.token);
      navigate("/");
    } else if (response?.error === 'Invalid username or password') {
      alert('Invalid username or password');
    } else {
      console.log(response);
      alert("Please check your responses and try again.");
    }
  }

  let aside = document.getElementById('aside');
  let main = document.getElementsByTagName('main')[0];
  aside.style.display = 'none';
  main.style.width = '100vw';

  return (
    <div className='form_wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className='field'>
          <input name='username' type='text' value={formData.username} onChange={handleChange} />
          <label htmlFor='username'>Username</label>
        </div>
        <div className='field'>
          <input name='password' type='password' value={formData.password} onChange={handleChange} />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='links'>
          <Link to='/forgot-password'>Forgot Password?</Link>
          <Link to='/register'>Register</Link>
        </div>
        <button type='submit' value='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;