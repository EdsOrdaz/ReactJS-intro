import { useState } from 'react'
import { Timer } from './Timer'

export const TimerPadre = () => {
    const [milisec, setMilisec] = useState(1000);
  return (
    <>
        <span>Milisegundos { milisec }</span>

        <button className='btn btn-outline-info mx-2' onClick={() => setMilisec(1000)}>1000</button>
        <button className='btn btn-outline-info' onClick={() => setMilisec(2000)}>2000</button>
        <Timer milisegundos={milisec}/>

    </>
  )
}
