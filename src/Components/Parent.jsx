import React,{useCallback, useEffect, useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [counter,setCounter]=useState(0);
    const [counterTwo,setCounterTwo]=useState([]);

    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counterTwo-1);
    }

 const fun=useCallback(()=>{
        console.log("Hello Rohtash Singh");
 },counterTwo);



 useEffect(()=>{
   console.log("counter mounted here",{counter})
 
   return ()=>{
    console.log("if dependency has some value",{counter})
   }
    
 },[counter])


 useEffect(()=>{
   console.log("counter updated here")
   return function(){
    console.log("unmounted the screen from the toggle bar")
   }
 },[])

  return (
    <>
    <Child counterTwo={counterTwo} fun={fun}/>
    <button onClick={increment}>increment{counter}</button>
    <button onClick={decrement}>decrement{counterTwo}</button>
    </>
  )
}

export default Parent