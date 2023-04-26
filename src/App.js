
import { useRef, useState } from 'react';
import './App.css';

function App() {

  
  const [timer,settimer]=useState(0)
  let timerid=useRef(0)


  const startTimer=()=>{
    timerid.current= setInterval(() => {
        settimer((prev)=> prev+1)
      }, 1000);
  }

  const stoptimer=()=>{
    clearInterval(timerid.current)
  }

  return (
    <>

    <div className='counter'>
      <h2>count value is {timer}</h2>

      <div className='div'>
      <button onClick={startTimer}>start</button>
      <button onClick={stoptimer}>stop</button>
      </div>
    </div>
  
    </>
  );
}

export default App;
