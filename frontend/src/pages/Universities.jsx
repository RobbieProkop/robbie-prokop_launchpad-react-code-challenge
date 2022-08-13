import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getUnis } from "../features/uni/uniSlice";
import UniItem from "../components/UniItem";

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
            {/* <div className="bg1">
              <h2>Battery</h2>
              <p>Respiration</p>
            </div>
            <div className="bg1">
              <h2>Running</h2>
              <p>Miles</p>
            </div>
            <div className="bg1">
              <h2>36 &deg;</h2>
              <p>Temperature</p>
            </div>
            <div className="bg2">
              <h2>Bed</h2>
              <p>Sleep Keep</p>
            </div>
            <div className="bg1">
              <h2>
                98 <span>bpm</span>
              </h2>
              <p>Heart Rate</p>
            </div>
            <div className="bg1">
              <h2>
                170 <span>lbs</span>
              </h2>
              <p>Weight</p>
            </div>
            <div className="bg2">
              <h2>
                28 <span>%</span>
              </h2>
              <p>Fat Percentage</p>
            </div>
            <div className="bg1">
              <h2>
                118 <span>mgdl</span>
              </h2>
              <p>Blood Glucose</p>
            </div>
            <div className="bg2">
              <h2>
                680 <span>kcal</span>
              </h2>
              <p>AVG Consumption</p>
            </div>
            <div className="bg2">
              <h2>Dumbell</h2>
              <p>Workouts</p>
            </div>
            <div className="bg1">
              <h2>
                85 <span>%</span>
              </h2>
              <p>Body Hydration</p>
            </div> */}
          </section>
        </div>
      )}
    </>
  );
};
export default Universities;
