import React,{useState} from 'react';
import './Room.css';

function Room() {
let [isLit,setLit]=useState(true);
let [age,setAge]=useState(20);
let [temp,setTemp]=useState(22);
// const state=useState(true);
//   console.log("State=",state);
function tog(){
    setLit(!isLit);
    // if(isLit){
    //     setLit(false);
    //     console.log("dark")
    // }
    // else{
    //     setLit(true);
    //     console.log("Lit")
    // }
    
}
return ( //+(isLit?"lit":"dark")
    <div className={`room  ${isLit?"lit":"dark"}`}>
{/* This is Room : Lit={isLit?"Lit":"Dark;" //JSON.stringify(isLit)  JSON.stringify converts value into string */} 
  <button onClick={tog}>Toggle</button>
  <br/>
<b>The room Light is: {isLit?"On:":"Off"}</b>
<br/>
<button onClick={() =>setAge(++age)}>age</button> 
  <br/>
  <b>The Age is: {age}</b>
  <br/>
  <button onClick={() =>setLit(true)}>ON</button> 
  <button onClick={() =>setLit(false)}>OFF</button> 
  <br/>
  <b>The Temperature is: {temp}</b>
  <br/>
  <button onClick={() =>setTemp(++temp)}>+</button> 
  <button onClick={() =>setTemp(--temp)}>-</button> 
    </div>
  );
}

export default Room;
