import React from 'react'

export default function StudentList(data) {
  return (
    <>
        <div>StudentList</div>
    <div>
        {
            data.map(student=> {
                <p>{student}</p>
            })
        }
    </div>
    </>

  )
}
