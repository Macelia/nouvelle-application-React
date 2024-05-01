import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Singup = () => {
  return (
    <div className='form '>  
        <div className='form_container p-150 rounded bg-red'>
              <form>
                <h3 className='text-center'>Sing Up</h3>

                <div className='mb-2'>
                  <label htmlFor='fname'>First-Name</label>
                  <input type='text' placeholder='Enter first Name ' className='form-control' />
                </div>

                <div className='mb-2'>
                  <label htmlFor='lname'>Last-Name</label>
                  <input type='text' placeholder='Enter last Name ' className='form-control' />
                </div>

                <div className='mb-2'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' placeholder='Enter your Password' className='form-control' />
                </div>

               

                <div className='d-grid'>

                  <button className='btn btn-primary'>Sign Up</button>

                </div>

                <p className='text-end mt-2'>
                 Already Registred <Link to='/login' className='ms-2'> Sing In</Link>
                </p>

              </form>

              
        </div>

        
       
      
    </div>
  )
}

export default Singup
