import React from 'react'
import './Main.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Main = () => {

  const [storys, setStorys] = useState([])

  useEffect(() => {

    axios.get(`/api/storys/`)
    .then(resp => {

      console.log(resp.data);
      setStorys(resp.data)

    })
    .catch(error => console.log(error))


  },[])
 
  return (
   <>
    <div className='row justify-content-center mt-5'>
    {storys && storys.map(data => {


        return(

         


        
          <Link to={`donation/${data.id}`} className="card-link col-2 card m-2 p-0 " >
           <img className='main-image card-img-top img-fluid ' src={data.photo} alt="noutrauka"  />
            <div className="card-body">
              <h5 className="card-title text-warning fw-bold">{data.story_name}</h5>
              <p className="story-text card-text">{data.story}</p>
              <p className="card-text"><span className='rised-sum'>{data.amount_donation} Eur</span> </p>
              <p> jau surinkta suma</p>
              <p> Likusi iki tikslo suma</p>
             
            </div>
          </Link>
       
          

        )
    } 
        )}
   </div>
   </>
     
      
      
     
  )
}

export default Main