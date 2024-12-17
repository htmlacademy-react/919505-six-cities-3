import {PropsWithChildren} from 'react';
import {Page} from '../../common/const.ts';
import Header from '../header/header';
import Footer from '../footer/footer.tsx';

type LayoutProps = {
  currentPage: string;
  favoritesQuantity: number;
};

const getPageModifier = (currentPage: string, favoritesQuantity: number) => {
  switch (currentPage) {
    case Page.MAIN:
      return 'page--gray page--main';
    case Page.LOGIN:
      return 'page--gray page--login';
    case Page.FAVORITES:
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
      {currentPage === Page.FAVORITES && <Footer/>}
    </div>
  );
}
