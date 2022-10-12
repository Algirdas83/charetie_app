import React from 'react'
import './Main.css'
import { useEffect, useState, useContext } from 'react'
import MainContext from '../../context/MainContext.js'
import axios from 'axios'

const Main = () => {

  const [storys, setStorys] = useState([])
  const [donator, setDonator] = useState({

    donator_name:'',
    donated_sum: '', 
    storyId:''
  })

   const [refresh, setRefresh] = useState(false)

  const {setAlert, userData} = useContext(MainContext)

  useEffect(() => {

    axios.get(`/api/storys/`)
    .then(resp => {

      
      setStorys(resp.data)

    })
    .catch(error => console.log(error))


  },[refresh,])

  ///// handle imput
  const handleInput = (e) => {

    setDonator({...donator, [e.target.name]: e.target.value })
  }

////// handleClick
  const handleClick = (id) => {
    setDonator({...donator, storyId: id})
   
  }


////// handleSubmit
  const handleSubmit = (e, id) => {
    // e.preventDefault()
    
    axios.post('/api/donators/donation', donator)
    .then(resp => {
     
      setRefresh(!refresh)
      setAlert({
        message: resp.data,
        status: 'success'
      })
    })
    .catch(error =>{
      console.log(error)
      setAlert({
        message: error.response.data,
        status: 'danger'
      })
    } )

  }
 
  return (
   <>
    <div className='row justify-content-center mt-5'>
    {storys && storys.map(data => {
            
            

        return(

         <div key={data.id} className='main-card card m-2 p-0'>
               <img className='main-image card-img-top img-fluid ' src={data.photo} alt="noutrauka"  />
                <div className="card-body">
                    <h5 className="card-title text-warning fw-bold">{data.story_name}</h5>
                    <p className="story-text card-text">{data.story}</p>
                    <p className="card-text"><span className='rised-sum'>Reikalinga suma {data.amount_donation} Eur</span> </p>

                    <p>Suaukota {data.raised_donation} eur  </p>
                    <p> Likusi iki tikslo {data.amount_donation - data.raised_donation} suma</p>

                    <div className='donators-list border border-warning rounded-2 border-2'>
                      {data.donations.map(donators => { 
                        return(
                       
                          <p key={donators.id}> { donators.donator_name} <span>{donators.donated_sum} Eur</span></p>
                        
                         )

                      } )}

                   </div>

                    <form onSubmit={(e) => handleSubmit(e,)}>
                      <div className='mt-2'>
                        <input type="text" name='donator_name' placeholder='Aukotojo vardas' onChange={handleInput} />
                      </div>
                      <div className='mt-2'>
                        <input type="number" name='donated_sum' placeholder='Aukojama suma' onChange={handleInput} />
                      </div>
                      <button className='btn btn-info mt-2' onClick={(e) => handleClick(data.id)}>Aukoti</button>
                    </form>
                </div>
         </div>
       
          

        )
        
       }
        )}
   </div>
   </>
     
      
      
     
  )
}

export default Main