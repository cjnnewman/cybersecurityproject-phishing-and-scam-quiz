'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (!response?.error) {
      router.push('./dashboard');
      router.refresh();
    } else {
      setErrorMessage('Invalid Credentials');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="email"
        className="border border-black text-black"
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        className="border border-black text-black"
        type="password"
        placeholder="Password"
      />
      <button type="submit" className="button">Login</button>
      {errorMessage && (<p style={{ textAlign: 'center', color: 'red', marginTop: '0.5rem' }}>{errorMessage}</p>)}
    </form>
  );
}