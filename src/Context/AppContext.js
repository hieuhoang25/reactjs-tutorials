import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    const [userData, setUserData] = useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>{
            setUserData(json.data)
        })
    },[])
    return <AppContext.Provider value={userData}>
      {children}
    </AppContext.Provider>
}