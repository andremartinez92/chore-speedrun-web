'use client';

import { FormEvent, useState } from 'react';
import { signUpWithEmailAndPassword } from '../helpers';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    const result = await signUpWithEmailAndPassword({
      email,
      password,
    });

    const { error } = JSON.parse(result);
    console.log('result', result);
    if (error?.message) {
      console.log('error');
    } else {
      console.log('successful sign up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default RegisterForm;
