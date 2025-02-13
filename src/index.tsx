import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {Provider} from 'react-redux';
import {store} from './store';

import 'react-toastify/dist/ReactToastify.css';
import Toast from './components/toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Toast/>
      <App/>
    </Provider>
  </React.StrictMode>
);
