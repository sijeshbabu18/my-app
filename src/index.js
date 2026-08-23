import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './app/store';
import reportWebVitals from './reportWebVitals';
import MaintenanceScreen from './MaintananceScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MaintenanceScreen />
      {/* <App/> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
