import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <BrowserRouter basename="/goit-react-hw-08-phonebook"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
