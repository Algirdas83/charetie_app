import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../../context/MainContext'
import axios from 'axios'






const Register = () => {

    const {setAlert} = useContext(MainContext)
    const navigate = useNavigate()

    const [newUser, setNewUser] = useState(
        {
            first_name:'',
            last_name: '',
            email: '',
            password: ''
        }
    )

    const handleInput = (e) => {

        setNewUser({...newUser, [e.target.name]: e.target.value})
        console.log(newUser);
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        axios.post('/api/users/register/', newUser)
        .then(resp =>
            {
                setAlert(
                    {
                        message: resp.data, 
                        status:'success'
                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
            })

        .catch(error => {
            console.log(error)
            setAlert(
                {
                    message: error.response.data,
                    status: 'danger'
                }
            )
        })
        

        
    }


  return (
    <div className='row justify-content-center mt-3'>
      <h2 className='text-center'>Registracija</h2>
        <form  className='story-new-form col-4 p-3 border  border-2  rounded-2  bg-light ' onSubmit={(e) => handleSubmit(e)} >
            <div>
              <input className='form-control mt-3' type="text" name='first_name' placeholder='Jūsų istorijos pavadinimas' onChange={handleInput} />
            </div>
            <div>
            <input className='form-control mt-3' type="text" name='last_name' placeholder='Jūsų istorijos pavadinimas' onChange={handleInput} />
            </div>
            <div>
                <input className='form-control mt-3' type="email" name='email' placeholder='Jusu El pašto adresas'  onChange={handleInput} />
            </div>
            <div>
                <input className='form-control mt-3' type="password" name='password' placeholder='Jusu slaptažodis'  onChange={handleInput} />
            </div>
            <div className='d-grid mt-3'>
              <button className='btn btn-success'>Ikelti</button>
            </div>
            
            
        </form>


    </div>
  )
}

export default Register