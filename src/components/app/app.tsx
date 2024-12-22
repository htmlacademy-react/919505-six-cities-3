import {BrowserRouter} from 'react-router-dom';
import RoutesGenerator from '../../routes-generator/routes-generator.tsx';
import {PageProps} from '../../utils/types.ts';

type AppProps = {
  pageProps: PageProps;
};

export default function App({pageProps}: AppProps) {
  return(
    <BrowserRouter>
      {RoutesGenerator.generateRoutes(pageProps)}
    </BrowserRouter>
  );
}
