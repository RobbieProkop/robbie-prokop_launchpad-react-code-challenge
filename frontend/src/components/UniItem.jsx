import { useSelector } from "react-redux";

const UniItem = ({ uni, id, key }) => {
  // console.log(key);
  return (
    <a
      href={`${uni.web_pages[0]}`}
      target="_blank"
      className={id % 2 ? "bg1 uni" : "bg2 uni"}
    >
      <h3>{uni.name}</h3>
      <p>{uni.web_pages[0]}</p>
      <p>{uni.country}</p>
    </a>
  );
};
export default UniItem;
