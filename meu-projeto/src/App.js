import './App.css';
import HelloWodl from './components/HellooWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <SayMyName nome="João"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Rodrigo" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
