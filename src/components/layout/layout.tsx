import {Outlet} from 'react-router-dom';
import useLayout from '../../hooks/use-layout';
import Footer from '../footer';
import Header from '../header';

export default function Layout(): JSX.Element {

  const {rootClassName,
    logoClassName,
    shouldRenderUser,
    shouldRenderHeader,
    shouldRenderFooter
  } = useLayout();

  return (
    <div className={`page ${rootClassName}`}>
      {shouldRenderHeader && <Header logoClassName={logoClassName} shouldRenderUser={shouldRenderUser}/>}
      <Outlet/>
      {shouldRenderFooter && <Footer/>}
    </div>
  );
}
