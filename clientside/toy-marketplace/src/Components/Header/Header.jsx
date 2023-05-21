/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/Provider/Provider";
import { FaSignOutAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 text-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <a>Home</a>
              </li>
              <li>
                <Link to="/allToys">
                  <a>All Toys</a>
                </Link>
              </li>

              <li>
                {user && (
                  <li className="mx-0">
                    {user && (
                      <Link to="/myToy">
                        <a>My Toys</a>
                      </Link>
                    )}
                  </li>
                )}
              </li>

              <li>
                {user && (
                  <li className="mx-0">
                    {user && (
                      <Link to="/addToy">
                        <a>Add A Toy</a>
                      </Link>
                    )}
                  </li>
                )}
              </li>

              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {" "}
            <Link to="/">
              <img src="../Assests/logo.webp" alt="Toy Man" />
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/allToys">
                <a>All Toys</a>
              </Link>
            </li>

            <li>
              {user && (
                <Link to="/myToy">
                  <a>My Toys</a>
                </Link>
              )}
            </li>
            <li>
              {user && (
                <Link to="/addToy">
                  <a>Add A Toy</a>
                </Link>
              )}
            </li>

            <li>
              <Link to="/blog">
                <a>Blogs</a>
              </Link>
            </li>
          </div>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="user-container">
              <img className="rounded-full" src={user?.photoURL} />
              <div className="email-tooltip">{user?.displayName}</div>
            </div>
          )}
        </div>
        <div>
          {user ? (
            <FaSignOutAlt
              className="text-3xl hover:cursor-default"
              onClick={handleLogOut}
            />
          ) : (
            <Link to="/login">
              <button className="btn-outline h-20 rounded-2xl w-36">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
