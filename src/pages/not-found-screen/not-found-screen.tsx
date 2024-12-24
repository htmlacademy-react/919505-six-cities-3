import {Link} from 'react-router-dom';
import {AppRoute, Page} from '../../utils/const.ts';

export default function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto'}}>
        <h1>404. Page not found</h1>
        <Link to={AppRoute[Page.Main]}>Вернуться на главную</Link>
      </div>
    </main>
  );
}
