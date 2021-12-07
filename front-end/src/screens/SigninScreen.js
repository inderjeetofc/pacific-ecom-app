import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function SigninScreen() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
          <div><h1>Sign In</h1></div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label></label>
          <button className="primary block" type="submit">
            Submit
          </button>
        </div>
        <div>
          <label></label>
          <div>
            New customer ?{" "}<Link to="/register" className="color-black">Create your Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
