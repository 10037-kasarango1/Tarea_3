// src/App.jsx
import ClickExample from './components/ClickExample';
import InputExample from './components/InputExample';

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: '#333' }}>Ejemplos de Eventos en React</h1>
      <ClickExample />
      <InputExample />
    </div>
  );
}

export default App;