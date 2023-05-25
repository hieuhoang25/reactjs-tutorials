
import './App.css';

import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import Header from './hook/context/Header';
import Content from './hook/context/Content';
import Sidebar from './hook/context/Sidebar';
import { AppContext } from './Context/AppContext';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');
  // chong reder fucntion
  const onTextInputChange= useCallback((e)=>{
     setTextInput(e.target.value);
  },[])
  const onAddBtnClick= useCallback((e)=>{
  // them 
  setTodoList(pre=> {
    return [ {id:v4(),name:textInput, isCompleted:false}, ...pre]
  })
  setTextInput('')
 },[textInput, todoList]) // call back when text int put change

 const onCheckBtnClick = useCallback((id)=>{
   setTodoList(pre =>pre.map(todo=> todo.id === id ? {...todo, isCompleted: true}: todo))
 },[])
 //luu tru
 useEffect(()=>{
  localStorage.setItem('TODO',JSON.stringify(todoList))
 },[todoList])

 useEffect(()=>{
  const todoListLocal = localStorage.getItem('TODO');
  if (todoListLocal){
    setTodoList(JSON.parse(todoListLocal))
  }
 },[])
 const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className='App'
    >
      <AppContext>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content isOpen={isOpen} />
      {isOpen && <Sidebar />}
      </AppContext>
     
    </div>
  );
}

export default App;
