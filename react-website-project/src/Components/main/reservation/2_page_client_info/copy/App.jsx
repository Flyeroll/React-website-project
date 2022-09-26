import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState("")

  function format(element) {
    setNumber((prev) => {
      return element.target.value
    })
  }

  function showInputPhone(elem) {
    let ballToOpen = document.getElementsByClassName('numberBall')[0 ]
    ballToOpen.classList.add("opened")
    console.log(elem.target);
    elem.target.classList.add('opened')
  }
  return (
    <div className="App">
        <input type='text' maxLength={18}  onChange={(elem) => {format(elem)}} onClick={(elem) => showInputPhone(elem)}/>
        <h2 className='numberBall'>&nbsp;&nbsp;{`${number}`}</h2>
    </div>
  );
}

export default App;
