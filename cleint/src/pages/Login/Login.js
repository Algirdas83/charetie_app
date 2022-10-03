import React from 'react'
import { useState, useContext } from 'react'
import MainContext from '../../context/MainContext.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const {setAlert} = useContext(MainContext)

    const navigate = useNavigate()

    const handleForm = (e) => {

        //   setForm({...form, [e.target.name]:e.target.value})
        setUser({...user, [e.target.name]: e.target.value})
    
      }

      const handleSubmit = (e) => {

        e.preventDefault()
    
        axios.post('/api/users/login', user)
        .then(resp => {
           
            setTimeout(() => {
              navigate('/')
            }, 1000)

            setAlert({
                message : resp.data.message,
                status : 'success'
            })
            // window.scrollTo(0,0)
    
            
    
        })
        .catch(error => {
            console.log(error)
    
                    setAlert({
    
                        message : error.response.data,
                        status : 'danger'
                    })
    
                    // if(error.response.status === 401)
                    //     navigate('/login')
        })
        
    }


  return (
   
    <div className='row justify-content-center mt-3'>
    <h2 className='text-center'>Nauja istorija</h2>
      <form className='story-new-form col-4 p-3 border  border-2  rounded-2  bg-light ' onSubmit={(e) => handleSubmit(e)} >
        
          <div>
              <input className='form-control mt-3' type="email" name='email' placeholder='Jūsų el paštas'  onChange={handleForm} />
          </div>

          <div>
              <input className='form-control mt-3' type="password" name='password' placeholder='Jūsų slaptažodis'  onChange={handleForm} />
          </div>

          <div className='d-grid mt-3'>
            <button className='btn btn-success'>Ikelti</button>
          </div>
          
          
      </form>


  </div>


  )
}

export default Login