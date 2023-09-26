import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { Formulario } from './components/Formulario';
import { Formulario2 } from './components/Formulario2';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>
      <Counter />
      <Usuario />

      <h2>UseEffect - useRef</h2>
      <hr />

      <TimerPadre />


      <h2>UseReducer</h2>
      <hr />
      <ContadorRed />

      <hr />
      <h2>CustomHooks</h2>

      <Formulario />
      <br />
      <Formulario2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
