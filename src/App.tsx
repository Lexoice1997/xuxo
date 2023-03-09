import { withErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/Error/Error';
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

export default withErrorBoundary(App, { fallback: <ErrorPage /> });
