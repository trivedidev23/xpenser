import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            Xpenser <i className="fa-solid fa-credit-card"></i>
          </div>
          <div className="header-button">
            <a
              href="https://github.com/trivedidev23"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
