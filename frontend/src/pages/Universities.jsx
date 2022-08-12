import { toast, ToastContainer } from "react-toastify";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Universities = () => {
  return (
    <>
      <div className="container">
        <section className="heading">
          <h1>Universities in your country</h1>

          {/* THIS IS NOT DOING A GET REQUEST BY POST ID, IT IS FILTERING THE POSTS INSTEAD. MAY CHANGE LATER */}
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
          <div class="bg1">
            <h2>Battery</h2>
            <p>Respiration</p>
          </div>
          <div class="bg1">
            <h2>Running</h2>
            <p>Miles</p>
          </div>
          <div class="bg2">
            <h2>36 &deg;</h2>
            <p>Temperature</p>
          </div>
          <div class="bg1">
            <h2>Bed</h2>
            <p>Sleep Keep</p>
          </div>
          <div class="bg1">
            <h2>
              98 <span>bpm</span>
            </h2>
            <p>Heart Rate</p>
          </div>
          <div class="bg2">
            <h2>
              170 <span>lbs</span>
            </h2>
            <p>Weight</p>
          </div>
          <div class="bg1">
            <h2>
              28 <span>%</span>
            </h2>
            <p>Fat Percentage</p>
          </div>
          <div class="bg2">
            <h2>
              118 <span>mgdl</span>
            </h2>
            <p>Blood Glucose</p>
          </div>
          <div class="bg2">
            <h2>
              680 <span>kcal</span>
            </h2>
            <p>AVG Consumption</p>
          </div>
          <div class="bg1">
            <h2>Dumbell</h2>
            <p>Workouts</p>
          </div>
          <div class="bg1">
            <h2>
              85 <span>%</span>
            </h2>
            <p>Body Hydration</p>
          </div>
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
        </section>
      </div>
    </>
  );
};
export default Universities;
