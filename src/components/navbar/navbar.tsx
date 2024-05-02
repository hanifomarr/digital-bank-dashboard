import { Box, CircleUser } from "lucide-react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlink">
        <Link to={"/"} className="logo">
          <Box className="logo-icon" />
        </Link>
        <Link to={"/"}>
          <div className="navlink-list">
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to={"analytic"}>
          <div className="navlink-list">
            <span>Analytics</span>
          </div>
        </Link>
        <Link to={"transaction"}>
          <div className="navlink-list">
            <span>Transactions</span>
          </div>
        </Link>
      </div>
      <div className="nav-right">
        <form onSubmit={(e) => console.log(e)}>
          <input id="search" type="search" placeholder="Search..." />
          <button type="submit">Go</button>
        </form>
        <button>
          <CircleUser className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
