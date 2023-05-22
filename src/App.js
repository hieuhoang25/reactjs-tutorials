import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Textfield  from '@atlaskit/textfield';
import Button  from '@atlaskit/button';
import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
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
  return (
    <div className="App">
     <h3>Danh sach can lam</h3>
     <Textfield  name="add-todo"
      placeholder="Them viec can lam"
      elemAfterInput={
        <Button 
        onClick={onAddBtnClick}
         isDisabled={!textInput} 
         appearance='primary'>Them</Button>
      }
      css={{padding:"2px 4px 2px"}}
      value={textInput}
      onChange={onTextInputChange}
      ></Textfield>
     <TodoList  todoList = {todoList} onCheckBtnClick={onCheckBtnClick}/>
    </div>
  );
}

export default App;
