import React,{useState,useCallback, useEffect, useRef} from 'react'
import './App.css'
import Card from './Components/Card'
import Parent from './Components/Parent';
 
function App() {

 const [length,setLength]=useState(8);
 const [numAllowed,setnumAllowed]=useState(false);
 const [charAllowed,setCharAllowed]=useState(false);
const [password,setPassword]=useState("")
//this is the useRef hook
const passwordRef=useRef(null);

const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let num="0123456789";
let char="!@#$%^&*(){}?"
  if(numAllowed){
    str+=num;
  }
  if(charAllowed){
  str+=char;
  }

  for (let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);
  }

  setPassword(pass);
},[length,numAllowed,charAllowed,setPassword]);

const copyPasswordToClip=useCallback(()=>{
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0,3);
window.navigator.clipboard.writeText(password)
},[password])
 
useEffect(()=>{
  passwordGenerator();
},[length,numAllowed,charAllowed,passwordGenerator])



  return (
    <>
  { <div className="flex justify-center mt-10">
    <div className=" flex-col shadow rounded-lg overflow-hidden mb-4">
   <h2 className="text-xl text-center text-white">Password Generator </h2>

      <input type="text"
      value={password}
      className='max-w-screen-sm py-1 px-3 outline-none passwordInput'
      placeholder='Password'
      ref={passwordRef}
      readOnly
      />
      <button className='bg-blue-200 outline-none py-3 border-collapse' onClick={copyPasswordToClip}>
        Copy
        </button>
      <div className="others">
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='w-20 cursor-pointer'
       onChange={(e)=>{setLength(e.target.value)}}
         />
         <label> length:{length}</label>
         
         <input type="checkbox"
         defaultChecked={numAllowed}
         id="numberInput"
         className='ml-5'
         onChange={()=>{setnumAllowed((prev)=>!prev)}}
         />
         <span className='ml-1'>Numbers</span>
        
         <input type="checkbox"
         id="characterInput"
         defaultChecked={charAllowed}
         className='ml-5'
         onChange={()=>{setCharAllowed((prev)=>!prev)}}
         />
         <span className='ml-1'>Characters</span>
      </div>
    </div>
  </div> 

  }
    </>
  )
}

export default App
