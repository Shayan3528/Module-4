import { useRef } from "react";
function App(){
const inputRef = useRef();

function handleClick(){
  inputRef.current.focus();
}



  return(
    <>
    <input type="text"  ref = {inputRef} />
    <button onClick = {handleClick} > Focus input field  </button>
    </>
  )
}

export default App;
