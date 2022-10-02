import React from 'react'
import './Main.css'
import { useEffect, useState } from 'react'
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

         


          
          <div className=" col-2 card m-2 p-0 " >
           <img className='main-image card-img-top img-fluid ' src={data.photo} alt="noutrauka"  />
            <div className="card-body">
              <h5 className="card-title">{data.story_name}</h5>
              <p className="card-text">{data.story}</p>
              <p className="card-text">{data.amount_donation} Eur</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
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