import React, { useState } from "react";
import Topbar from "../components/navbar/Topbar";
import "./login.css";
// i have used the same css file which was used for the login page

const Signup = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event){
      event.preventDefault()
      const response = await fetch('http://localhost:5000/api/signup',{
      method:'POST',  
      header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password
        })
      })

      const data = await response.json()
      console.log(data)
    }
  return (
    <div>
      <Topbar />
      <div className="login_page">
        <div className="signup_page_background_img" data-aos="fade"></div>
        {/* i have changed the class name of the upper div from login_page_background_img */}
        <div className="login_credentials">
          <div className="login_title " data-aos="fade-left">
            <h2>Signup</h2>
            <p>Enter your details to create an account.</p>
          </div>
          <div>
          <form onSubmit={registerUser}>
          <fieldset className="login_credentials_card">
          <input 
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="FirstName"
          required
          />
          <input 
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="LastName"
          required
          />
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
          />
          <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          />
                <button type="submit" className="formbutton">Signup</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
