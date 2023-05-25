import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
export default function UserInformation() {
    const {userData} = useContext(AppContext)
  return (
    <h5>{userData}</h5>
  )
}