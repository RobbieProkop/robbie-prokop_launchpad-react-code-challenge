import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import { postActions } from "../features/posts/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state) => state.posts.postForm);

  const addPostHandler = (e) => {
    e.preventDefault();
    {
      !toggled && dispatch(postActions.setToggleForm());
    }
  };
  return (
    <>
      <section className="heading">
        <h1>Posts Dashboard</h1>
        <button className="btn" onClick={addPostHandler}>
          Add a post!
        </button>
      </section>

      {toggled && <PostForm className="modal" />}
      <div className="bg1">
        <h2>
          Name <span>| text</span>
        </h2>
        <p>post info</p>
      </div>

      {/* <div class="bg1">
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
      </div> */}
    </>
  );
};
export default Home;
