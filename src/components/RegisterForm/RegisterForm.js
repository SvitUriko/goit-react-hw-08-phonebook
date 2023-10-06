import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormReg, LabelReg } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormReg onSubmit={handleSubmit} autoComplete="off">
      <LabelReg>
        Username
        <input type="text" name="name" autoComplete="given-name" />
      </LabelReg>
      <LabelReg>
        Email
        <input type="email" name="email" autoComplete="email" />
      </LabelReg>
      <LabelReg>
        Password
        <input type="password" name="password" autoComplete="new-password" />
      </LabelReg>
      <button type="submit">Register</button>
    </FormReg>
  );
};
