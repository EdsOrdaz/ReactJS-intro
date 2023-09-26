import { useState } from 'react'

export const Counter = () => {

    const [counter, setcounter] = useState(0)
    const incrementar = (num:number = 1):void => {
        setcounter(counter+num);
    }

  return (
    <>
        <h3>Counter: </h3>
        <span>Valore: {counter}</span>
        <br />
        <button className="btn btn-outline-primary mt-2 mx-1" onClick={ () => incrementar()}>+1</button>
        <button className="btn btn-outline-primary mt-2 mx-1" onClick={ () => incrementar(2) }>+2</button>
        <button className="btn btn-outline-primary mt-2 mx-1" onClick={ () => incrementar(5) }>+5</button>
        <button className="btn btn-outline-danger mt-2 mx-1" onClick={ () => setcounter(0) }>Reset</button>
    </>
  )
}
