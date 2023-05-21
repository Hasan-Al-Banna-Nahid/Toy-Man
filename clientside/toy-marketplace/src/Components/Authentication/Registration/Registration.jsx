/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import useTitle from "../../Hooks/useTitle";

const MySwal = withReactContent(Swal);

const Registration = () => {
  useTitle("Registration");
  const { handleSignUp, googleLogIn } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    handleSignUp(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        MySwal.fire("Good Job!", "User Created Successfully", "success");
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setSuccess("");
        setError(err.message);
        toast(error);
      });
  };
  const handleGoogleSignUp = () => {
    googleLogIn()
      .then((result) => {
        setError("");
        MySwal.fire("Good Job!", "User Created Successfully", "success");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setSuccess("");
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
              <img src="../Assests/Registration.jpg" alt="" />
            </LazyLoad>
          </div>

          <form
            onSubmit={handleRegistration}
            className="card flex-shrink-0 w-full h-2/3 font-semibold text-2xl max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <h1 className="text-3xl text-center">Registration</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                  <span className="label-text text-2xl">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered"
                  required
                  name="photo"
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <div className="social-register">
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignUp} className="ms-36 ">
                  <FaGoogle className="text-4xl hover:text-[#F4B400]" />
                </button>
              </div>
              <Link to="/login">
                Already Have An Account? Please{" "}
                <a className="underline">Login</a>
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

export default Registration;
