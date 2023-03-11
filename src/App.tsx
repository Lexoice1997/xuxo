import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routs from './routes/Routs';
import { setupStore } from './store/store';

const store = setupStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routs />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
