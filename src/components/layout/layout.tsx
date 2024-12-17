import {PropsWithChildren} from 'react';
import {Page} from '../../common/const.ts';
import Header from '../header/header';
import Footer from '../footer/footer.tsx';

type LayoutProps = {
  currentPage: string;
  favoritesQuantity: number;
};

const getPageModifier = (currentPage: string) => {
  switch (currentPage) {
    case Page.MAIN:
      return 'page--gray page--main';
    case Page.LOGIN:
      return 'page--gray page--login';
    default:
      return '';
  }
};

const getMainModifier = (currentPage: string) => {
  switch (currentPage) {
    case Page.MAIN:
      return 'index';
    case Page.LOGIN:
      return 'login';
    case Page.OFFER:
      return 'offer';
    case Page.FAVORITES:
      return 'favorites';
  }
};

export default function Layout({currentPage, favoritesQuantity, children}: PropsWithChildren<LayoutProps>): JSX.Element {
  const pageModifier = getPageModifier(currentPage);
  const mainModifier = getMainModifier(currentPage);

  return (
    <div className={`page ${pageModifier}`}>
      <Header currentPage={currentPage} favoritesQuantity={favoritesQuantity}/>
      <main className={`page__main page__main--${mainModifier}`}>
        {children}
      </main>
      {currentPage === Page.FAVORITES && <Footer/>}
    </div>
  );
}
