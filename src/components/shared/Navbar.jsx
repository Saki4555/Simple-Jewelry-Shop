import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.webp";
import UseAuth from "../../Hooks/UseAuth";
const Navbar = () => {
  const { user, logOut } = UseAuth();
  const navOptions = (
    <>
      <li className="tracking-wider text-[16px] font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-text" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="tracking-wider text-[16px] font-medium">
        <NavLink
          to="/all-jewelries"
          className={({ isActive }) => (isActive ? "nav-text" : "")}
        >
          All Jewelry
        </NavLink>
      </li>
      <li className="tracking-wider text-[16px] font-medium">
        <NavLink
          to="/my-jewelries"
          className={({ isActive }) => (isActive ? "nav-text" : "")}
        >
          My Jewelry
        </NavLink>
      </li>
      <li className="tracking-wider text-[16px] font-medium">
        <NavLink
          to="/add-jewelry"
          className={({ isActive }) => (isActive ? "nav-text" : "")}
        >
          Add Jewelry
        </NavLink>
      </li>
      <li className="tracking-wider text-[16px] font-medium">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "nav-text" : "")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const handleLogOUt = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar pr-5 bg-[#F5F5F5] fixed z-10">
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
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-sm lg:text-2xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="group menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                <img
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  className="object-cover object-center"
                  alt="profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="hidden">
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="hidden">
                <a>Settings</a>
              </li>
              <li>
                {user?.displayName} <br /> {user?.email}
              </li>
              <div className="divider pt-0"></div>

                <Link to="/dashboard">
                  <button className="btn btn-sm mb-2 w-full">Dashboard</button>
                </Link>
                <button onClick={handleLogOUt} className="btn btn-sm">
                  Logout
                </button>
            
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-5 py-2 btn-1 text-white hover:bg-black transition tracking-wide rounded-full">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
