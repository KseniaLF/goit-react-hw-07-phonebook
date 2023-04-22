import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from 'components/Constants/Layout.styled';
import { GlobalStyle } from 'components/Constants/GlobalStyle';

import { App } from 'components/App/App';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <GlobalStyle />
          <App />
        </Layout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
