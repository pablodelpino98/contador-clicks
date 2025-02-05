import './App.css';
import logo from './media/click.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumCLicks] = useState(0);

  const manejarClick = () => {
    setNumCLicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumCLicks(0);
  }

  return (
    <div className="App">
      <div className="imagen-logo-contenedor">
        <img className='imagen-logo'src={logo} alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton
          texto='Click' 
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
