import { useMemo, useReducer, useRef, useState } from 'react'
import './App.css'
import Test from './components/Test';
import MyProvider from './MyProvider';

const initialState = {
  firstname: "Fajri",
  lastname: "Awan"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRSTNAME":
      return {...state, firstname: action.payload}
    case "LASTNAME":
      return {...state, lastname: action.payload}
  
    default:
      return state
  }
}

function App() {

  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {...initialState})
  // const [dark, setDark] = useState(false);

  const myRef = useRef();

  const changeBg = useMemo(() => {
    console.log("MASUK")
  }, []);

  const handleChangeInput = (type, value) => {
    console.log(value)
    dispatch({
      type, payload: value
    })
  }

  // const changeBg = console.log("AA")

  return (
    <MyProvider>
      <div style={{backgroundColor: "white", width: "100vw", height: '100vh'}}>
        <button onClick={() => myRef.current?.testAh()}>KLIK AJA COBA</button>
        <button onClick={() => setCount(c => c+1)}>Increment value: {count}</button>
        <div>{changeBg}</div>
        <Test passedInRef={myRef} />

        <input type='text' placeholder='firstname here' onChange={(e) => handleChangeInput("FIRSTNAME", e.target.value)}></input>
        <input type='text' placeholder='lastname here' onChange={(e) => handleChangeInput("LASTNAME", e.target.value)}></input>

        <div style={{backgroundColor: 'black'}}>Test reducer : {state.firstname} {state.lastname}</div>
      </div>
    </MyProvider>
  )
}

export default App
