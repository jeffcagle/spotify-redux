import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css';
import Gateway from '../components/Gateway';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Gateway>
        <Component {...pageProps} />
      </Gateway>
    </Provider>
  );
}
