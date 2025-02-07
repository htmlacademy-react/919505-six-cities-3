import {Outlet} from 'react-router-dom';
import {useLayout} from '../../hooks/use-layout';
import Footer from '../footer';
import Header from '../header';

export default function Layout(): JSX.Element {

  const {rootClassName,
    linkClassName,
    shouldRenderUser,
    shouldRenderHeader,
    shouldRenderFooter
  } = useLayout();

  return (
    <div className={`page ${rootClassName}`}>
      {shouldRenderHeader && <Header linkClassName={linkClassName} shouldRenderUser={shouldRenderUser}/>}
      <Outlet/>
      {shouldRenderFooter && <Footer/>}
    </div>
  );
}
