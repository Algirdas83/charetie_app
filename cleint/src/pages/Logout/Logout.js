import React from 'react'
import { useEffect, useContext } from 'react'
import MainContext from '../../context/MainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {

    const navigate = useNavigate()

    const {setAlert, setUserData} = useContext(MainContext)

    useEffect (() => {
       
        axios.get('/api/users/logout/')
        .then(resp => 
            {
                setUserData({})
                setAlert({
                    message: resp.data,
                    status: 'success'
                })
                

                navigate('/')
            })
        .catch(error => 
            {
                console.log(error)
                setAlert({
                    message: error.response.data,
                    status: 'danger'
                })
                
                navigate('/')
            })

    },[])

  return (
    <div>Logout testas</div>
  )
}

export default Logout