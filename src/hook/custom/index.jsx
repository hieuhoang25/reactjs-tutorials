import React from 'react'
import { useReducer } from './useReducer'
import { useFetch } from './useFetch'



export default function CustomHook() {
const {data: users, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')
   console.log({data: users, isLoading, error})
  return (
    <div>index</div>
  )
}
