import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostalInfo } from "../features/postal/postalSlice";

const PostalLookup = () => {
  const dispatch = useDispatch();

  const { postals, current, isLoading, isError, message } = useSelector(
    (state) => state.postalInfo
  );
  const { places, country } = postals;

  const [postal, setPostal] = useState("00210");

  let placeName = "";
  let stateAbb = "";
  // for (const place in places[0]) {
  //   if (place === "place name") {
  //     placeName = places[0][place];
  //   }
  //   if (place === "state abbreviation") {
  //     stateAbb = places[0][place];
  //   }
  // }

  useEffect(() => {
    if (isError) {
      toast.error(message);
      <ToastContainer />;
      console.log(message);
    }
    if (postal.length === 5) {
      dispatch(getPostalInfo(postal));
    }
  }, [dispatch, postal]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <section className="heading">
            <h1>Local information based on Zip Code</h1>
            {/* search for Postal/Zip code
            currently limited to the USA  */}
            <div className="search postal">
              <div className="column">
                <label htmlFor="postal-search">
                  Enter Your Zip Code ( from : 00210 to 99950 )
                </label>
                <input
                  type="text"
                  name="postal"
                  id="postalNum"
                  value={postal}
                  placeholder="12345"
                  onChange={(e) => setPostal(e.target.value)}
                />
              </div>
            </div>
          </section>

          <section className="content">
            {places &&
              (isError ? (
                <h3>Could not locate Zip Code</h3>
              ) : (
                <div className="posts">
                  <div className="post">
                    <h4>Country: {country}</h4>
                    <h4>State: {places[0].state}</h4>
                    <h3>
                      City/Town: {placeName}, {stateAbb}
                    </h3>
                    <h4>Longitude: {places[0].longitude}</h4>
                    <h4>Latitude: {places[0].latitude}</h4>
                  </div>
                </div>
              ))}
          </section>
        </div>
      )}
    </>
  );
};
export default PostalLookup;
