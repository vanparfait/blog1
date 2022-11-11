import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <a className="logo" href="">
          Bproo Blog
        </a>
      </div>
      <ul className="liens">
        <li>
          <a href="" className="lien">
            Accueil
          </a>
        </li>
        <li>
          <a
            href=""
            className="lien"
            style={{
              backgroundColor: "#028bfc",
              padding: "0.5rem",
              color: "#fff",
              borderRadius: "0.5rem",
            }}
          >
            Creer Article
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
