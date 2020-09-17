import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'antd/dist/antd.css';
import React from 'react';
import store from '../ui/redux/store';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />{' '}
    </Provider>
  );
}
