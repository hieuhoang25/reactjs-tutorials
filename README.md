# Getting Started with Hook
## useState
`useState` is a React Hook that lets you add a state to variable to your component
```java
 const [state, setState] = useState(initialState);
```
### Usage
-  Adding state to a component
- Updating state based on the previous state
- Updating objects and arrays of in state
- Avoiding creating the initial state
- Resetting state with a key
- Storing information from previous renders
## useEffect
`useEffect` is a Rect Hook that lets you synchronize a component with an external system
```java
useEffect(setup, dependencies?)
dependencies: nêu ko cung cấp nó sẽ được call đầu khi mount và render khi componet render. nêu cung cấp [] thì được call khi mount mà ko đc render khi component render. nếu cung cấp [state1, state2,..] sự call lại khi các state1 thay đổi
```
### Usage
- Connecting to an external system : call API, connect third-party library
```java
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}
```
- Wrapping Effects in custom Hooks
```javascript
function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });
  // ...
```
- Controlling a non-React widget
- Fetching data with Effects
- Specifying reactive dependencies
- Updating state based on previous state from an Effect
- Removing unnecessary object dependencies
- Removing unnecessary function dependencies
- Reading the latest props and state from an Effect
- Displaying different content on the server and the client
## useMemo
`useMemo` is a React Hook that lets you cache the results of a calculation between re-renders. Trach sai vi ton memory
```javascript
const cachedValue = useMemo(calculateValue, dependencies)
```
### Usage
- Skipping expensive recalculation
```javascript
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}

```
- Skipping re-rendering of components
- Memoizing a dependency of another Hook
- Memoizing a function

## useCallback
`useCallback` is a React Hook that lets you cache a function definition between re-renders
```javascript
const cachedFn = useCallback(fn, dependencies)
```
### Usage
- Skipping re-rendering of components
```javascript
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...
```
- Updateing state from a memoized callback
```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...
```
- Preventing an Effect from firing too often
```javascript
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Only changes when createOptions changes
  // ...

```
- Optimizing a custom Hook
```javascript
function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback((url) => {
    dispatch({ type: 'navigate', url });
  }, [dispatch]);

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack,
  };
}
```
## useRef
`useRef` is a React Hook that lets you reference a value that’s not needed for rendering.
```javascript
const ref = useRef(initialValue)
```
### Usage
- Referencing a value with a ref
- Manipulating the DOM with a ref
- Avoiding creating the ref contents

## useReducer
`useReducer` is a React Hook that lets you add a reducer to your component
```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init?)
Reference:
useReducer(reducer, initialArg, init?)
dispatch function
```

## Custom Hook 
Là 1 function bắt đầu chữ use. Gọi 1 react Hook phía trong
### Usage
- Tối ưu code
- Clean code

# React 18
- Concurrency

## useId
`useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes
```javascript
const id = useId()
```
### Usage
- Generating unique IDs for accessibility attributes
- Generating IDs for several related elements
- Specifying a shared prefix for all generated IDs
## useTransition
`useTransition` is a React Hook that lets you update the state with blocking the UI
```javascript
const [isPending, startTransition] = useTransition()
```
### Usage
- Making a state update as a non-blocking transition
- Updating the parent component in a transition
- Displaying a pending visual state the trasition
- Preventing unwanted loading idicators
- Building a Suspense-enabled router
## useDegerredValue
`useDegerredValue` is a React Hook that lets you defer updating a part of the UI
### Usage
- Showing stale content while fresh content is loading
- Indicating that the content is table
- Deferring re-rendering for a part of the UI
## useContext
`useContext` is a React Hook that lets you read and subcribe to context from your component.
```javascript
const value = useContext(SomeContext)
```
### Usage 
- Passing data deeply into the tree
- Updating data passed via context
- Specifying a fallback default value
- Overriding context for a part of the tree
- Optimizing re-renders when passing objects and functions
