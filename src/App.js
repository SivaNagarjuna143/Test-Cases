import React, { useState } from 'react';

const App = (props) =>{
  const [counter,setCounter]=useState(5);
  return(
    <div>
<h1>Welcome To React</h1>
<h2>Welcome To Javascript</h2>
<div id='welcome'>welcome {props.name}</div>
<div id="initial_Value">{counter}</div>
<button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  )
}
export default App