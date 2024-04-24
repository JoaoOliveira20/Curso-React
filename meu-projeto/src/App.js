import './App.css';
import HelloWodl from './components/HellooWorld'

function App() {

  const name = 'joão'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá,{newName}</p>
      <p>Soma: {sum (1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWodl/>
    </div>
  );
}

export default App;
