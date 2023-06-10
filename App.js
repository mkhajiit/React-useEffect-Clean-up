import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("created");
    return ()=>console.log("destroyed");
  },[]);
  return (
    <h1>Hello!!!</h1>
  );
}
function App() {
  const [clocking,setClocking] = useState(false);
  const onClick = ()=>{
    setClocking((current)=>!current);
  };
  return(
    <>
    {clocking ? null:<Hello/>}
    <button onClick={onClick}>{clocking? "unClock":"Clock"}</button>
    </>
  );
}
export default App;