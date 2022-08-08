import {
  FaUniversity,
  FaSearchLocation,
  FaRegStickyNote,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">Launchpad Code Challenge</Link>
        </div>
        <ul className="header-link">
          <li className="icon">
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
      </header>
    </>
  );
};
export default Header;
