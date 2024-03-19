import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils";

function Register({ setName, setToken }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(values => ({...values, [name]: value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (formData.confirm_password !== formData.password) {
        alert("Passwords do not match!");
        return
    }

    const response = await postData("/api/register", formData);
    if (response === undefined) {
        alert("Could not connect to the registration server. Please try again later.")
    } else if ("token" in response) {
        setName(formData.username);
        setToken(response.token);
        navigate("/");
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
        <h1>Register</h1>
        <div className='field'>
          <input name='username' type='text' value={formData.username} onChange={handleChange} />
          <label htmlFor='username'>Username</label>
        </div>
        <div className='field'>
          <input name='password' type='password' value={formData.password} onChange={handleChange} />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='field'>
          <input name='confirm_password' type='password' value={formData.confirm_password} onChange={handleChange} />
          <label htmlFor='confirm_password'>Confirm Password</label>
        </div>
        <button type='submit' value='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Register;