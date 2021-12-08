import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {} from "react-router-dom";
import { useLocation } from "react-router";
import { userSigninAction } from "../state/actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

export default function SigninScreen() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSigninAction(email, password));
  };
  let redirectUser = useLocation().search;
  const redirectUrl = redirectUser ? redirectUser.split("=")[1] : "";
  console.log(`/${redirectUrl}`);
  useEffect(() => {
    if (userInfo) return navigate(`/${redirectUrl}`);
  }, [userInfo, redirectUrl, navigate]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox>LOADING...</LoadingBox>}
        {error && <MessageBox variant={`message-box`}>{error}</MessageBox>}
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
            New customer ?{" "}
            <Link to="/register" className="color-black">
              Create your Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
