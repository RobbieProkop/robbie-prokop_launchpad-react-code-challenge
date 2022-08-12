import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnis } from "../features/uni/uniSlice";

const Universities = () => {
  const dispatch = useDispatch();

  const { unis, isLoading, isError, message } = useSelector(
    (state) => state.universities
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      <ToastContainer />;
      console.log(message);
    }
    dispatch(getUnis());
  }, [dispatch, isError, message]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <section className="heading">
            <h1>Universities in your country</h1>
            {/* search for unis */}
            {/* <div className="search">
              <div className="column">
                <label htmlFor="postSearch">Search by User</label>
                <input
                  type="number"
                  name="user"
                  id="text"
                  value={userId}
                  placeholder="User:"
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="column">
                <label htmlFor="postSearch">Search by ID</label>
                <input
                  type="number"
                  name="searchId"
                  id="text"
                  value={searchId}
                  placeholder="ID:"
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </div>
            </div> */}
          </section>

          <section className="uni-content">
            {/* {posts.length > 0 ? (
            <div className="posts">
              {posts
                .filter((post) => {
                  if (searchId === "" && userId === "") {
                    return post;
                  } else if (post.id === Number(searchId)) {
                    return post;
                  } else if (post.userId === Number(userId)) {
                    return post;
                  }
                })
                .map((post) => (
                  <PostItem key={post.id} post={post} />
                ))}
            </div>
          ) : (
            <h3>No posts to show</h3>
          )} */}
            <div className="bg1">
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
            </div>
          </section>
        </div>
      )}
    </>
  );
};
export default Universities;
