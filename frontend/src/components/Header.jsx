import { FaUniversity, FaSearchLocation, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="width-container">
          <div className="logo">
            <Link to="/">Launchpad Code Challenge</Link>
          </div>
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
        </div>
      </header>
    </>
  );
};
export default Header;
