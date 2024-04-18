
"use client"  

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Link from "next/link";

export default function Home() {

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
    <main>
      <div>
          <div id="questionBox" className="div2">
            <div>
            <form onSubmit={handleSubmit}>
              <div className="user">
                <label>Username</label>
                <p></p>
                <input 
                type="email" 
                id="usrname" 
                name="email" 
                placeholder='Email'
                required></input>
              </div>
              <div className="pass">
                <label>Password</label>
                <p></p>
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder='Password'
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
              </div>
              <button id="submit" type="submit" >Submit</button>
            </form>
            </div>
            <div className="loginbuttons1">
              <label>Register an Account:</label>
              <p></p>
                <Link href="/signup">
                    <button>Sign Up</button>
                  </Link> 
            </div>
          </div>
        </div>
    </main>
  );
}
