import React from 'react'
import { useState, useContext} from "react"
import MainContext from '../../context/MainContext'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const NewStory = () => {

  const {setAlert} = useContext(MainContext)

const [story, setStory] = useState({
    story_name:'',
    story:'',
    photo:'',
    amount_donation:''
})

const navigate = useNavigate()

const handleForm = (e) => {

    //   setForm({...form, [e.target.name]:e.target.value})
    setStory({...story, [e.target.name]: e.target.name === 'photo'? e.target.files[0] : e.target.value})
    console.log(story);
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
          navigate('/')
        }, 1000)
        setAlert({
            message : resp.data,
            status : 'success'
        })
        // window.scrollTo(0,0)

        // navigate('/admin/workers')

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
        <form  className='story-new-form col-4 p-3 border  border-2  rounded-2  bg-light ' onSubmit={(e) => handleSubmit(e)} >
            <div>
              <input className='form-control mt-3' type="text" name='story_name' placeholder='Jūsų istorijos pavadinimas' onChange={handleForm} />
            </div>
            <div>
               <textarea  className="form-control mt-3" name="story"  cols="30" rows="5" placeholder='Istorijos tekstas' onChange={handleForm}></textarea>
            </div>
            <div>
                <input className='form-control mt-3' type='file' name='photo' placeholder='Jūsų nuotrauka'  onChange={handleForm} />
            </div>
            
            <div>
               
                <input className='form-control mt-3' type="number" name='amount_donation' placeholder='Suma kuria siekiama surinkti'  onChange={handleForm} />
            </div>
            <div className='d-grid mt-3'>
              <button className='btn btn-success'>Ikelti</button>
            </div>
            
            
        </form>


    </div>
  )
}

export default NewStory