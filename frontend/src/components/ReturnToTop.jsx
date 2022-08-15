import { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ReturnToTop = (y) => {
  const [visible, setVisible] = useState(false);

  //click events
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 200 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      id="scroll"
      className="return-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <a href="#">
        <button className="btn btn-edit">
          <FaAngleDoubleUp />
        </button>
      </a>
    </div>
  );
};
export default ReturnToTop;
