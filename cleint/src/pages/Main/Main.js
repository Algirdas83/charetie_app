import React from 'react'
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
    <div> 
      {storys && storys.map(data => {
          return(
            
            <ul key={data.id}>
              <li><img src={data.photo} alt='nuotrauka'  width='150px'/>
              <img src={data.photo} alt="" width="20%" />
              
              </li>
              <li>{data.story}</li>
               <li>Planuojama surinkti auku {data.amount_donation} Eur</li>
           </ul>
            
            

          )   

      })}
      
      
     </div>
  )
}

export default Main