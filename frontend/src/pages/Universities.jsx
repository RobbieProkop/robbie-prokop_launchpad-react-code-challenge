import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnis } from "../features/uni/uniSlice";
import UniItem from "../components/UniItem";

const Universities = () => {
  const dispatch = useDispatch();

  const { unis, isLoading, isError, message } = useSelector(
    (state) => state.universities
  );

  let id = 0;

  // const addId = (id = 0) => {
  //   return function recur(obj) {
  //     if ("name" in obj) {
  //       obj.id = id++;
  //     }
  //     Object.keys(obj).forEach((el) => {
  //       obj[el].forEach(recur);
  //     });
  //   };
  // };

  // const mapId = (arr) => {
  //   arr.forEach(addId);
  // };

  // mapId(dispatch(getUnis()));

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
            {unis.length > 0 ? (
              // <div className="unis">
              <>
                {unis.map((uni) => (
                  <div>
                    <UniItem key={uni.name} uni={uni} id={id++} />
                  </div>
                ))}
                {/* {unis
                .filter((uni) => {
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
                ))} */}
              </>
            ) : (
              <h3>No posts to show</h3>
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
