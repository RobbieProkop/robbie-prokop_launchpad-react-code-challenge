import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getUnis,
  setCurrentCountry,
} from "../features/uni/uniSlice";
import UniItem from "../components/UniItem";
import { FaAngleDoubleUp } from "react-icons/fa";
import ReturnToTop from "../components/ReturnToTop";

const Universities = () => {
  const dispatch = useDispatch();

  const { unis, countries, currentCountry, isLoading, isError, message } =
    useSelector((state) => state.universities);

  const [name, setName] = useState("");
  const [country, setCountry] = useState(currentCountry);

  let id = 0;

  const onChange = (e) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      <ToastContainer />;
      console.log(message);
    }
    dispatch(getCountries());
    dispatch(getUnis(country));
    dispatch(setCurrentCountry(country));
  }, [dispatch, country, isError, message]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <section className="heading">
            <h1>Universities in {country}</h1>
            {/* search for unis */}
            <div className="search">
              <div className="column">
                <label htmlFor="uniSearch">Search by Name</label>
                <input
                  type="text"
                  name="uni"
                  id="uniName"
                  value={name}
                  placeholder="University:"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="column">
                <label htmlFor="countrySearch">Search by Country</label>
                <select id="countryName" value={country} onChange={onChange}>
                  {countries.map((el) => {
                    return (
                      <option value={el.name} key={el.name}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </section>

          <section className="uni-content">
            {unis.length > 0 ? (
              <>
                {unis
                  .filter((uni) => {
                    if (name === "") {
                      return uni;
                    } else if (
                      uni.name.toLowerCase().includes(name.toLowerCase())
                    ) {
                      return uni;
                    }
                  })
                  .map((uni) => (
                    <div key={id}>
                      <UniItem uni={uni} id={id++} />
                    </div>
                  ))}
              </>
            ) : (
              <h3>No Universities to show</h3>
            )}
          </section>
          <ReturnToTop />
        </div>
      )}
    </>
  );
};
export default Universities;
