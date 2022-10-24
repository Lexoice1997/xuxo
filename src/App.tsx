import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routs from './routes/Routs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routs />
      </div>
    </BrowserRouter>
  );
}

export default App;
