import {Page} from '../../const.ts';
import Layout from '../layout/layout';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';

type AppScreenProps = {
  offersCount: number;
}

const currentPage = Page.MAIN;

const getPage = (offersCount: number) => {
  switch (currentPage) {
    case Page.MAIN:
      return (
        <Layout currentPage={Page.MAIN}>
          <MainPage offersCount={offersCount}/>
        </Layout>
      );

    case Page.LOGIN:
      return (
        <Layout currentPage={Page.LOGIN}>
          <LoginPage/>
        </Layout>
      );
  }
};

export default function App({offersCount}: AppScreenProps) {
  return getPage(offersCount);
}
