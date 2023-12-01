import React from "react";
function Header() {
  return (
    <nav className=" green darken-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/">Git</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
