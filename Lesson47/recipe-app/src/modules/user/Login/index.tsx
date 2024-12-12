import { useContext } from 'react';
import { UserDispatchContext, UserActionTypes } from '../UserContext';
import { useForm } from 'react-hook-form';
import { emailPattern } from '../../../utils';
import './styles.css';

interface LoginFormInputs {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useContext(UserDispatchContext);

  const onSubmit = (data: LoginFormInputs) => {
    dispatch({ type: UserActionTypes.login, payload: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <label htmlFor='email-input'>Email</label>
      <input
        id='email-input'
        type='email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: emailPattern,
            message: 'Email should be in the name@domain.com format',
          },
        })}
      />
      {errors.email && (
        <span className='error-message'>{String(errors.email.message)}</span>
      )}

      <label htmlFor='password-input'>Password</label>
      <input
        id='password-input'
        type='password'
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && (
        <span className='error-message'>{String(errors.password.message)}</span>
      )}

      <button className='btn--success' type='submit'>
        Login
      </button>
    </form>
  );
};
