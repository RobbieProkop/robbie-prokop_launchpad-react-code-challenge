import { useState } from "react";
import { FaUniversity, FaSearchLocation, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <>
      <header id="header">
        <div className="width-container">
          <div className="logo">
            <Link to="/">Launchpad Code Challenge</Link>
            <div
              className={toggleMenu ? "toggle active" : "toggle"}
              onClick={(e) => setToggleMenu(!toggleMenu)}
            ></div>
          </div>
          <nav className="hidden">
            <ul className="header-link">
              <li>
                <Link to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/universities">
                  <FaUniversity /> Find Universities
                </Link>
              </li>
              <li>
                <Link to="/postal">
                  <FaSearchLocation /> Postal Search
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/universities">
                  <FaUniversity /> Find Universities
                </Link>
              </li>
              <li>
                <Link to="/postal">
                  <FaSearchLocation /> Postal Search
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <nav class="menu">
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/universities">
              <FaUniversity /> Find Universities
            </Link>
          </li>
          <li>
            <Link to="/postal">
              <FaSearchLocation /> Postal Search
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
