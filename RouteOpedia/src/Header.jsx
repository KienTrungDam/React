import logo from "./images/react.png";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cryptoDetail/BTC/10">Crypto Detail</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/product/create">Product Create</Link></li>
                        <li><Link className="dropdown-item" to="/product/detail/100">Product Deatil</Link></li>
                        <li><Link className="dropdown-item" to="/product">Product</Link></li>
                        <li><Link className="dropdown-item" to="/product/list">Product List</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    </div>
  );
}

export default Header;