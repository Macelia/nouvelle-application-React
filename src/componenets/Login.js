import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='form '>  
        <div className='form_container p-150 rounded bg-red'>
              <form>
                <h3 className='text-center'>Sing In</h3>

                <div className='mb-2'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' placeholder='Enter @ Email ' className='form-control' />
                </div>

                <div className='mb-2'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' placeholder='Enter your Password' className='form-control' />
                </div>

                <div className='mb-2'> 
                  <input type='checkbox'  className='custom-control custom-checkbox' id='check' />
                  <label htmlFor='check' className='custom-input-label ms-2'>Rmember me</label>
                </div>

                <div className='d-grid'>

                  <button className='btn btn-primary'>Sign In</button>

                </div>

                <p className='text-right'>
                  Forgot <a href="" className='lien'> Password? </a> <a href="" className='lien'> Sing up</a>
                </p>

              </form>

              <button class="arrow-button" onClick={()=>navigate('/')} >Back to Acceuil</button>
        </div>

        
       
      
    </div>
  )
}

export default Login
