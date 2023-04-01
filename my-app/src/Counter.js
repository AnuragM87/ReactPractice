import React ,{useState} from 'react';
export default function Counter(){
    const[count,setCounter]=useState(0)
    const increament=()=>
        setCounter((count)=>count+1);
    const decreament=()=>setCounter((count)=>count-1);
    const reset=()=>{
        setCounter((count)=>0)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    }