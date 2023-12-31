import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import { FaUserCheck, FaUserTie, FaUserShield } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [role] = useRole();
  const {changeTheme, buttonName} = useContext(ThemeContext)

  console.log(role);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(`/`);
      })
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
      <NavLink className={"navLink"} to={`/all-classes`}>
          Classes
        </NavLink>
      </li>
      <li>
      <NavLink className={"navLink"} to={`all-instructors`}>
          Instructors
        </NavLink>
      </li>
      {role === "student" && (
        <li>
          <NavLink className={"navLink"} to={`/dashboard/enrolled-classes`}>
            <FaUserCheck size={25} /> Dashboard
          </NavLink>
        </li>
      )}
      {role === "instructor" && (
        <li>
          <NavLink className={"navLink"} to={`/dashboard/my-classes`}>
            <FaUserTie size={25} /> Dashboard
          </NavLink>
        </li>
      )}
      {role === "admin" && (
        <li>
          <NavLink className={"navLink"} to={`/dashboard/all-users`}>
            <FaUserShield size={25} /> Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-200">
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
              <div
                className="avatar tooltip tooltip-left"
                data-tip={user.displayName}
              >
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

        <button onClick={changeTheme} className="btn">
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
