import LoginForm from '../../components/login-form';
import {Cities} from '../../common/const';

function LoginScreen(): JSX.Element {
  const randomCity = Cities[Math.floor(Math.random() * Cities.length)];

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm/>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#"> <span>{randomCity}</span> </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
