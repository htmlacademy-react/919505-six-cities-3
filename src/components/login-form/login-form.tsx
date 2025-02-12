import {FormEvent, useEffect} from 'react';
import {useActionCreators} from '../../hooks/store';
import {userSliceActions} from '../../store/slices/user';
import useForm from '../../hooks/use-form';
import {TLoginForm, TLoginFormData} from '../../types/login';
import {toast} from 'react-toastify';

const PASSWORD_INVALID_MESSAGE = 'Пароль должен состоять минимум из одной буквы и цифры';

export default function LoginForm(): JSX.Element {
  const [handleInputChange, formData, setFormData] = useForm<TLoginFormData>({email: '', password: ''});
  const {login} = useActionCreators(userSliceActions);

  const validatePassword = (password: string) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    return regExp.test(String(password));
  };

  const handleFormSubmit = (evt: FormEvent<TLoginForm>) => {
    evt.preventDefault();

    if (validatePassword(formData.password)) {
      login(formData);
    } else {
      toast.warn(PASSWORD_INVALID_MESSAGE, {position: 'bottom-right'});
    }
  };

  useEffect(() => () => {
    setFormData({email: '', password: ''});
  }, [setFormData]);

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={handleInputChange} required/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={handleInputChange} required/>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

