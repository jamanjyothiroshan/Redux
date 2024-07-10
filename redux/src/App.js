import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {

  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store)=>{return store;});

  return (
    <div className="App">
      <input ref={inputRef}></input>
      <br></br>
      <button type="button" onClick={()=>{
        dispatch({type: "addBatters", data: inputRef.current.value});
      }}>Batters</button>
      <button type="button" onClick={()=>{
        dispatch({type: "addBowlers", data: inputRef.current.value});
      }}>Bowlers</button>
      <button type="button" onClick={()=>{
        dispatch({type: "addAllRounders", data: inputRef.current.value});
      }}>All Rounders</button>
        <h1>Batters:{storeObj.batters}</h1>
        <h1>Bowlers:{storeObj.bowlers}</h1>
        <h1>All Rounders: {storeObj.allRounders}</h1>
    </div>
  );
}

export default App;
