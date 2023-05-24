import React, { useEffect, useState } from 'react'
import { fetchBio } from './api';

export default function Page() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] =  useState(null)
    const [reFetch, setReFetch] = useState(false)
    useEffect(()=>{
        let ignore = false;
        setBio(null)
        fetchBio(person).then(result => {
            if (!ignore) {
              setBio(result);
            }
          });
          return () => {
            ignore = true;
          }
    },[person, reFetch])
  return (
    <>
    <button onClick={()=> setReFetch(!reFetch)}> refresh</button>
    <select value={person} onChange={e => {
      setPerson(e.target.value);
    }}>
      <option value="Alice">Alice</option>
      <option value="Bob">Bob</option>
      <option value="Taylor">Taylor</option>
    </select>
    <hr />
    <p><i>{bio ?? 'Loading...'}</i></p>
  </>
);
}
