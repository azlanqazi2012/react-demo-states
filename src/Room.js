import React,{useState} from 'react';


function Room() {
let [isLit,setLit]=useState(true);
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
return (
    <div>
{/* This is Room : Lit={isLit?"Lit":"Dark;" //JSON.stringify(isLit)  JSON.stringify converts value into string */} 
  <button onClick={tog}>Toggle</button>
  <br/>
<b>The room Light is: {isLit?"On:":"Off"}</b>
    </div>
  );
}

export default Room;