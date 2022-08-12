import { useSelector } from "react-redux";

const UniItem = ({ uni, id }) => {
  return (
    <>
      <a
        href={`${uni.web_pages[0]}`}
        target="_blank"
        className={id % 2 ? "bg1" : "bg2"}
      >
        <div>
          <h2>{uni.name}</h2>
          <a href={`${uni.web_pages[0]}`} target="_blank">
            {uni.web_pages[0]}
          </a>
          <p>{uni.country}</p>
        </div>
      </a>
    </>
  );
};
export default UniItem;
