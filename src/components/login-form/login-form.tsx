import {FormEvent} from 'react';
import {useActionCreators} from '../../hooks/store';
import {userProcessActions} from '../../store/slice/user-process';
import useForm from '../../hooks/use-form';
import {TLoginForm, TLoginFormData} from '../../types/login';
import {TFormChangeHandler} from '../../types/event-handlers';

export default function LoginForm(): JSX.Element {
  const {formData, handleFormChange} = useForm<TLoginFormData>({email: '', password: ''});
  const {login} = useActionCreators(userProcessActions);

  const inputChangeHandler: TFormChangeHandler = (evt) => {
    handleFormChange(evt);
  };

  const submitHandler = (evt: FormEvent<TLoginForm>) => {
    evt.preventDefault();
    login(formData);
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={inputChangeHandler} required/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={inputChangeHandler} required/>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

