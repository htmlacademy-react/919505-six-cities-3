import {PropsWithChildren} from 'react';
import {Page} from '../../utils/const.ts';
import Footer from '../footer/footer.tsx';
import Header from '../header/header.tsx';

type LayoutProps = {
  currentPage: Page;
  favoritesQuantity: number;
};

const getPageModifier = (currentPage: string, favoritesQuantity: number) => {
  switch (currentPage) {
    case Page.Main:
      return 'page--gray page--main';
    case Page.Login:
      return 'page--gray page--login';
    case Page.Favorites:
      return favoritesQuantity === 0 ? 'page--favorites-empty' : '';
    case Page.PageNotFound:
      return 'page--gray page--main';
    default:
      return '';
  }
};

export default function Layout({currentPage, favoritesQuantity, children}: PropsWithChildren<LayoutProps>): JSX.Element {
  const pageModifier = getPageModifier(currentPage, favoritesQuantity);

  return (
    <div className={`page ${pageModifier}`}>
      {currentPage !== Page.PageNotFound && <Header currentPage={currentPage} favoritesQuantity={favoritesQuantity}/>}
      {children}
      {currentPage === Page.Favorites && <Footer/>}
    </div>
  );
}
