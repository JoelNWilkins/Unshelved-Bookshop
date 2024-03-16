import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiRead } from 'react-icons/gi';

function SignInOut({ name, setName, setToken }) {
  const navigate = useNavigate();

  return (
    <div id='sign_in_out'>
      { name !== null ?
        <div className='dropdown'>
          <button className='dropdown_button'>
            <div className='reader_icon'>
              <GiRead size='25px' />
            </div>
            {name}
          </button>
          <div className='dropdown_content'>
            <Link to="/profile">Profile</Link>
            <button onClick={() => {
              setName(null);
              setToken(null);
              localStorage.clear();
              navigate('/');
            }}>Sign Out</button>
          </div>
        </div>
        :
        <>
          <Link to='/register'>Register</Link>
          <span>/</span>
          <Link to='/login'>Sign In</Link>
        </>
      }
    </div>
  );
}

export default SignInOut;
