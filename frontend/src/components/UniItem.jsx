import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const UniItem = ({ uni }) => {
  const navigate = useNavigate();

  return (
    <>
      <a href={`${uni.web_pages[0]}`} target="_blank">
        <div className="bg1">
          <h2>Battery</h2>
          <p>Respiration</p>
        </div>
      </a>
    </>
  );
};
export default UniItem;
