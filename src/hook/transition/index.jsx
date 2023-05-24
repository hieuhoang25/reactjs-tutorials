import React from 'react'

export function TabButton({children, isActive, onClick}){
    if (isActive){
        return <b>{children}</b>
    }
    return (
        <>
            <button onClick={()=>{onClick()}}>

            </button>
        </>
    )
}

export default function AppTransition() {
  return (
    <div>index</div>
  )
}
