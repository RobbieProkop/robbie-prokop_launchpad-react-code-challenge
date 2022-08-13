import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostalLookup = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, message } = useSelector(
    (state) => state.universities
  );
  const [postal, setPostal] = useState("");

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
        </div>
      )}
    </>
  );
};
export default PostalLookup;
