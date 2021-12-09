import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {} from "react-router-dom";
import { useLocation } from "react-router";
import { userRegisterAction } from "../state/actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

export default function RegisterScreen() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("Password and confirm passwor do not match!");
    // } else 
    dispatch(userRegisterAction(name, email, password,confirmPassword));
  };
  let redirectUser = useLocation().search;
  const redirectUrl = redirectUser ? redirectUser.split("=")[1] : "";
  // console.log(`/${redirectUrl}`);
  useEffect(() => {
    if (userInfo) return navigate(`/${redirectUrl}`);
  }, [userInfo, redirectUrl, navigate]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {loading && <LoadingBox>LOADING...</LoadingBox>}
        {error && <MessageBox variant={`message-box`}>{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="ConfirmPassword"
            type="password"
            placeholder="Enter Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Already a registered user?{" "}
            <Link
              to={`/signin?redirect=${redirectUrl}`}
              className="color-black"
            >
              Sign-in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
