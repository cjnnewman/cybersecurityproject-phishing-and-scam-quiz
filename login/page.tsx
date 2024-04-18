
"use client"  

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

// When the user starts to type something inside the password field
function check_password() {

  //if meets criteria, will be 4
  var valid_password = 0

  var myInput = document.getElementById("psw") as HTMLInputElement
  var letter = document.getElementById("letter") as HTMLElement
  var capital = document.getElementById("capital") as HTMLElement
  var number = document.getElementById("number") as HTMLElement
  var length = document.getElementById("length") as HTMLElement
  var submit = document.getElementById("submit") as HTMLButtonElement

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    valid_password++
  } else {}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    
    valid_password++
  } else {}

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    
    valid_password++
  } else {}

  // Validate length
  if(myInput.value.length >= 8) {
    
    valid_password++
  } else {}
}

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
          <div id="questionBox" className="div3">
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
                onKeyUp={check_password} 
                type="password" 
                id="password" 
                name="password" 
                placeholder='Password'
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
              </div>
              
              <button id="submit" type="submit" className="button">Submit</button>
            </form>

            </div>

            <div className="loginbuttons1">
          <label>Register an Account:</label>
          <p></p>
            <Link href="/signup">
                <button>Sign Up</button>
              </Link> 
          </div>
              
          <div className="loginbuttons1">
            <p>Or</p>
            <Link href="/home">
                <button>Continue As A Guest</button>
              </Link> 
          </div>
          </div>
        </div>
    </main>
  );
}
