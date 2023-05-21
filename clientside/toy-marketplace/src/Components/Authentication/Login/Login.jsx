/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { AuthContext } from "../Provider/Provider";
import { FaGoogle } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import useTitle from "../../Hooks/useTitle";

const MySwal = withReactContent(Swal);

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log(from);
  const { handleSignIn, googleLogIn } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log(error);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignIn(email, password)
      .then((result) => {
        MySwal.fire("Welcome!", "User Logged In Successfully", "success");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
        toast(error);
      });
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        setError("");
        MySwal.fire("Welcome!", "User Logged In Successfully", "success");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast(error);
      });
  };
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <LazyLoad>
              <img src="../Assests/login.jpg" alt="" />
            </LazyLoad>
          </div>

          <form
            onSubmit={handleLogin}
            className="card flex-shrink-0 w-full h-2/3 font-semibold text-2xl max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <h1 className="text-3xl text-center">Login</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <div className="social-register">
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogIn} className="ms-36 ">
                  <FaGoogle className="text-4xl hover:text-[#F4B400]" />
                </button>
              </div>
              <Link to="/register">
                New To Toy Man? Please <a className="underline">Register</a>
              </Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
