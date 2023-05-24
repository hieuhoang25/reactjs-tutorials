import React, { useReducer } from 'react'
const reducer  = (state, action) =>{
    switch(action){
        case 'TANG':
            return state+1;
        case 'GIAM':
            return state-1;
        case 'XOA_TAT_CA':
            return 0;
        default:
        return state;
    }
}
const reducer2 = (state, action) =>{
    switch(action.type){
        case 'GANGIATRI':
            return state+action.data;
        
        default:
        return state;
    }
}
// loading
const initState = {
    loading: false,
    data: [],
    error: null
}
const userReducer = (state, action) =>{
    switch(action.type){
        case 'GET_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_USER_SUCESS':
                return {
                    ...state,
                    loading: false,
                    data:[]
                }
        case 'GET_USER_ERROR':
                    return {
                        ...state,
                        error: action.data,
                        data: []
                    }
        default:
    }
}
export default function AppReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    const [count2, dispatch2] = useReducer(reducer2, 0);
    const [user, userDispatcher] = useReducer(useReducer, initState);
    /**
   * @param Action 'ADD_NEW_ITEM'
   * 
   * @param View : Nhan len 1 button dispatch ('Add_new_item')
   * 
   * @param Reducer : function (state, action) =>{
   *    switch (Action) {
    case 'ADD_NEW_ITEM':
        
        break;
   
    default:
        break;
   }
   * }
   */
  const getUsers = () =>{
    userDispatcher({
        type: 'GET_USER_REQUEST'
    })
    fetch('')
    .then(res => res.json())
    .then(res =>{
        userDispatcher(
            {
                type: 'GET_USER_SUCESS',
                data: res
            }
        )
    })
    .catch(err=>{
        userDispatcher(
            {
                type: 'GET_USER_ERROR',
                data: err
            }
        )
    })
  }
  return (
    <div>
        <button onClick ={getUsers}>Get users</button>
        {user.loading ? <p>Loading...</p> : user.data}
        <p>{count}</p>
        <p>{count2}</p>
        <button onClick={()=> dispatch('TANG')}>Tang</button>
        <button onClick={()=> dispatch('GIAM')}>Giam</button>
        <button onClick={()=> dispatch('XOA_TAT_CA')}>Xoa het du lieu</button>
        <button onClick={()=> dispatch2({
            type: 'GANGIATRI',
            data: 10
        })}>Xoa het du lieu</button>

    </div>
  )
}
