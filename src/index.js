import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter baseName="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
