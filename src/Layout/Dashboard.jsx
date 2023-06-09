import React from "react";
import { Outlet, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [role] = useRole();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1) + ` Dashboard`;
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden m-10"
        >
          Open drawer
        </label>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="mx-auto text-lg text-gray-500 font-bold">{capitalizeFirstLetter(role)}</li>
          <li className="mx-auto">
            <div className="avatar">
              <div className="w-32 rounded">
                <img src={user.photoURL} />
              </div>
            </div>
          </li>
          <li className="mx-auto">
            <h2 className="font-medium">{user.displayName}</h2>
          </li>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li onClick={handleLogOut}>
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
