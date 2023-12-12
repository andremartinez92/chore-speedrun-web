'use client';

import { FormEvent, useState } from 'react';
import { signInWithEmailAndPassword } from '../helpers';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signInWithEmailAndPassword({
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

export default SignIn;
