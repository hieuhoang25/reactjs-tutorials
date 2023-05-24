import React, { useRef, useState } from 'react'

export default function AppRef() {
  let ref = useRef(0); // ko bij khoi tao lai
  const object = {
    curent: 0
  }
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count+1);
    ref.current = ref.current+1;
    object.curent +=1;
  }
  console.log(
    ref,
    count,
    object
  )
  return (
    <div>
      <button onClick={()=> handleClick}> Click</button>
    </div>
  )
}

