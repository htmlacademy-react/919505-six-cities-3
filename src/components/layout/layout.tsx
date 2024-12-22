import {PropsWithChildren} from 'react';
import {Page} from '../../utils/const.ts';
import Header from '../header/header';
import Footer from '../footer/footer.tsx';

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
    default:
      return '';
  }
};

export default function Layout({currentPage, favoritesQuantity, children}: PropsWithChildren<LayoutProps>): JSX.Element {
  const pageModifier = getPageModifier(currentPage, favoritesQuantity);

  return (
    <div className={`page ${pageModifier}`}>
      <Header currentPage={currentPage} favoritesQuantity={favoritesQuantity}/>
      {children}
      {currentPage === Page.Favorites && <Footer/>}
    </div>
  );
}
