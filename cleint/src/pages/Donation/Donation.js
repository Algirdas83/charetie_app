import React from 'react'
import {useParams} from 'react-router-dom'

const Donation = () => {

    const {id} = useParams()

  return (
    <div>Donation {id}</div>
  )
}

export default Donation