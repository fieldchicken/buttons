import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThreePigs/>
    </div>
  );
}

function ThreePigs(){

  const [choice, setChoice] = useState("nothing");
  const [AddClass1, setAddClass1] = useState(false);
  const [AddClass2, setAddClass2] = useState(false);
  const [AddClass3, setAddClass3] = useState(false);
  let b1= "First Button";
  let b2= "Second Button";
  let b3= "Third Button";
  var dump;
  function handleClick(pig){
    console.log(pig);
    if (pig == b1){
      setAddClass1(!AddClass1);
      if (AddClass2){
        setAddClass2(!AddClass2);
      }
      if (AddClass3){
        setAddClass3(!AddClass3);
      }
    }
    else if (pig == b2){
      setAddClass2(!AddClass2);
      if (AddClass1){
        setAddClass1(!AddClass1);
      }
      if (AddClass3){
        setAddClass3(!AddClass3);
      }
    }
    else if (pig == b3){
      setAddClass3(!AddClass3);
      if (AddClass2){
        setAddClass2(!AddClass2);
      }
      if (AddClass1){
        setAddClass1(!AddClass1);
      }
    }
    setChoice(pig);
    

  }
  return(
    <div className="container">
      <div className="buttons">
        <button className={AddClass1 ? "button toggled": "button"} onClick={() => handleClick(b1)}>First Button</button>
        <button className={AddClass2 ? "button toggled": "button"} onClick={() => handleClick(b2)}>Second Button</button>
        <button className={AddClass3 ? "button toggled": "button"} onClick={() => handleClick(b3)}>Third Button</button>
      </div>
      <div className="textbox">
        <p>You have selected: {choice}</p>
      </div>
    </div>
  );
}

export default App;
