import React from 'react'
import { useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const NewStory = () => {

const [story, setStory] = useState({

    story:'',
    photo:'',
    amount_donation:''
})

const navigate = useNavigate()

const handleForm = (e) => {

    //   setForm({...form, [e.target.name]:e.target.value})
    setStory({...story, [e.target.name]: e.target.name === 'photo'? e.target.files[0] : e.target.value})

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    const formData = new FormData()

    for(const key in story){ 

      formData.append(key, story[key])
    }

    axios.post('/api/storys/new', formData)
    .then(resp => {

        setTimeout(() => {
          navigate('/main')
        }, 1000)
        // setAlert({
        //     message : resp.data,
        //     status : 'success'
        // })
        // window.scrollTo(0,0)

        // navigate('/admin/workers')

    })
    .catch(error => {
        console.log(error)

                // setAlert({

                //     message : error.response.data,
                //     status : 'danger'
                // })

                // if(error.response.status === 401)
                //     navigate('/login')
    })
    
}



  return (
    <div className='row justify-content-center'>
        <form className='col-4' onSubmit={(e) => handleSubmit(e)} >
            <div>
                 <label className='form-label mt-3'>Your story text</label>
                <input className='form-control' type="text" name='story' onChange={handleForm} />
            </div>
            <div>
                <label className='form-label mt-3'>Photo</label>
                <input className='form-control' type="file" name='photo'  onChange={handleForm} />
            </div>
            <div>
                <label className='form-label mt-3'>Donotion sum</label>
                <input className='form-control' type="number" name='amount_donation'  onChange={handleForm} />
            </div>
            <div className='d-grid mt-2'>
              <button className='btn btn-primary'>Ikelti</button>
            </div>
            
            
        </form>


    </div>
  )
}

export default NewStory