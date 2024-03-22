import logo from './logo.svg';
import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
      </Provider>
  );
}

export default App;
