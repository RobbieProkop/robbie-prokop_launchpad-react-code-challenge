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
  for (const place in places[0]) {
    if (place === "place name") {
      placeName = places[0][place];
    }
  }
  console.log(placeName);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      <ToastContainer />;
      console.log(message);
    }

    dispatch(getPostalInfo(postal));
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
            {places && (
              <div className="posts">
                <div className="post">
                  <h4>Country: {country}</h4>
                  <h4>State: {places[0].state}</h4>
                  <h3>City/Town: {placeName}</h3>
                  <h4>Longitude: {places[0].longitude}</h4>
                  <h4>Latitude: {places[0].latitude}</h4>
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};
export default PostalLookup;
