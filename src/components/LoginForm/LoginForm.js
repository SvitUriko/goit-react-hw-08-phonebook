import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLog, LabelLog } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLog onSubmit={handleSubmit} autoComplete="off">
      <LabelLog>
        Email
        <input type="email" name="email" autoComplete="email" />
      </LabelLog>
      <LabelLog>
        Password
        <input type="password" name="password" autoComplete="new-password" />
      </LabelLog>
      <button type="submit">Log In</button>
    </FormLog>
  );
};
