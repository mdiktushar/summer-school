import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import useRole from "../../../Hooks/useRole";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  // const [isAdmin] = useAdmin();
  const [role] = useRole()
  console.log(role);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const list = (
    <>
      <li>
        <NavLink className={"navLink"} to={`/`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"navLink"} to={`/afa`}>
          Item 3
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-100">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* all links */}
            {list}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img className="object-fill w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* all links */}
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        {/* login logout button toggle*/}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" m-1">
              <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={`/login`} className="btn">
            Login
          </Link>
        )}

        <button to={``} className="btn">
          Theme
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
