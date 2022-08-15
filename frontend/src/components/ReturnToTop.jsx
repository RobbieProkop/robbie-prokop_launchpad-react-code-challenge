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
    <a
      href="#"
      onClick={scrollToTop}
      className={visible ? "return-to-top" : "hide"}
    >
      <button className="btn btn-edit">
        <FaAngleDoubleUp />
      </button>
    </a>
  );
};
export default ReturnToTop;
