import './App.css'
import  { useState } from 'react'


function App() {

 let [counter,setCounter] = useState(1)

  // let counter = 5

  const addValue = ()=>{
    // counter = counter+1
    // console.log("clicked",counter)
    if(counter < 20){
      setCounter(counter+1)
      // console.log(counter)
    }else{
      alert("Enough Numbers")
    }
    /*
      setcCounter(prevcounter => prevcounter + 1)
      this value give callbk() store value 
    */ 
  }

  const removeValue =()=>{
    if(counter>0){
      setCounter(counter -1)
    }else{
      alert("no negative numbers")
    }
}

  return (
    <>
    <h1>Hitesh sir or React</h1>
    <h2>Counter value: {counter}</h2>

    <button
     onClick={addValue} 
    >Add value</button>
    {/* <br /> */}
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
