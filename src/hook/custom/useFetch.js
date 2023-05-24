import { useEffect } from "react"
import { useReducer } from "./useReducer"

function fetchReducer(state, action) {
    switch(action.type){
        case 'fetchAPI/request':
            return {
                ... state, 
                isLoading: action.isLoading
            }
        case 'fetchAPI/success':
        case 'fetchAPI/error':
            return {
                ... state,
                 isLoading: action.isLoading,
                 error: action.error,
                 data: action.data
                }
        default:
            return state
    }
}
// hock la 1 function khong phai la 1 promise
export const useFetch =  ( url) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data:[],
        isLoading: false,
        error: null
    })
    const fetchAPI = async (url) => {
        dispatch({
            type: 'fetchAPI/request',
            isLoading: true
        })
        try {
            const res = await fetch(`${url}`)
            const {data} = await res.json();
            dispatch({
                type: 'fetchAPI/success',
                isLoading: false,
                error: null,
                data,
            })
        } catch (error) {
            dispatch({
                type: 'fetchAPI/success',
                isLoading: false,
                error: null,
                data : [],
            })
        }
    }
    useEffect(() => {
        fetchAPI(url)
    }, [url])
   
    return {...state}
}