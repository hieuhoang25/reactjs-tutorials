import React, { useId } from 'react'
import StudentList from './StudentList'



export default function UseId() {
    const id = useId()
  return (
    <div>
        <label id={id} htmlFor={id}>Search name:</label>
        <input type="text" name="name" id={id}/>
        <StudentList data={[]}/>
    </div>
  )
}
