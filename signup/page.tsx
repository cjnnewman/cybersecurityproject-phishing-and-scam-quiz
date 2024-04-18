
"use client"  

import { FormEvent } from 'react';

// When the user starts to type something inside the password field
function check_password() {

  //if meets criteria, will be 4
  var valid_password = 0

  var myInput = document.getElementById("password") as HTMLInputElement
  var letter = document.getElementById("letter") as HTMLElement
  var capital = document.getElementById("capital") as HTMLElement
  var number = document.getElementById("number") as HTMLElement
  var length = document.getElementById("length") as HTMLElement
  var submit = document.getElementById("submit") as HTMLButtonElement

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    valid_password++
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");

}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    valid_password++
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");

  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    valid_password++
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");

  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    valid_password++
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");

  }

  if (valid_password==4){
    submit.style.visibility="visible"
  }
  else {
    submit.style.visibility="hidden"
  }
}

import Link from "next/link";

export default function Home() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
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
                type="text" 
                id="email" 
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

            <div id="message" className="req">
              <h3 className="asdf">Password must contain the following:</h3>
              <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
              <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
              <p id="number" className="invalid">A <b>number</b></p>
              <p id="length" className="invalid">Minimum <b>8 characters</b></p>
            </div>

            </div>

            <div className="loginbuttons1">
          <label>Continue with Existing Account:</label>
          <p></p>
            <Link href="/login">
                <button>Log In</button>
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
