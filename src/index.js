import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from 'components/Constants/Layout.styled';
import { GlobalStyle } from 'components/Constants/GlobalStyle';

import { App } from 'components/App/App';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>
);
