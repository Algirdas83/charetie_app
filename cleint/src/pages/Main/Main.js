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
   <>
    {storys && storys.map(data => {


        return(
          <ul key={data.id}>
            <li>{data.story}</li>
            <li> <img src={data.photo} alt="noutrauka" /> </li>
          </ul>

        )
    } 
        )}
   
   </>
     
      
      
     
  )
}

export default Main