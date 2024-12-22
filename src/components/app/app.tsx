import {BrowserRouter} from 'react-router-dom';
import AppRouter from '../../app-router/app-router.tsx';
import {AppProps} from '../../utils/types.ts';

export default function App({pageProps}: AppProps) {
  return(
    <BrowserRouter>
      <AppRouter pageProps={pageProps}/>
    </BrowserRouter>
  );
}
