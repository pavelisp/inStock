import "./Header.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__logo">
        <Link to="/">
          <img className="header__img" src={Logo} alt="Logo" />
        </Link> 
      </div>
      <div className="subheader">
        {/* 
        "className={(isActive) =>
              "active-link" + (!isActive ? "active-link" : "")
            } */}
        <div className="subheader__warehouse subheader__warehouse-title">
          <NavLink
            to="/"
            className="Nav__btn"
            activeClassName="active-link"
            exact={true}
          >
            Warehouse
          </NavLink>
        </div>
        <div className="subheader__inventory">
          <NavLink
            to="/inventory"
            className="Nav__btn"
            activeClassName="active-link"
          >
            Inventory
          </NavLink>
        </div>
      </div>
    </div>
  );
}
