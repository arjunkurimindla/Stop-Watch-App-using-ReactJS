import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
const App=() =>{
  const [show,setShow]=useState("true")

  return(
    <div>
      <button onClick={()=>{setShow(!show)}}>
        { show ? "Start Timer" : "Stop Timer"}
      </button>
      {show ? "" : <Timer/>}
    </div>
  )
};
export default App;