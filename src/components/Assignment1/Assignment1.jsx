import React, { useState } from "react";
import Profile from "./images/image1.jpg";
import "./Assignment1.css"; // Import the CSS file

function Assignment1() {
  const [followers, setFollowers] = useState(0);
  const [likes, setLikes] = useState(0);
  const [photos, setPhotos] = useState(0);

  return (
    <div className="profile-header">
      <div className="profile-image">
        <img src={Profile} alt="ghost" />
        <button
          onClick={() => alert("Edit image functionality not implemented yet")}
        >
          Edit
        </button>
      </div>

      <div className="profile-body">
        <div>
          <span>{followers}</span>
          <p>Followers</p>
          <button onClick={() => setFollowers(followers + 1)}>
            Add Follower
          </button>
        </div>
        <div>
          <span>{likes}</span>
          <p>Likes</p>
          <button onClick={() => setLikes(likes + 1)}>Add Like</button>
        </div>
        <div>
          <span>{photos}</span>
          <p>Photos</p>
          <button onClick={() => setPhotos(photos + 1)}>Add Photo</button>
        </div>
      </div>
    </div>
  );
}

export default Assignment1;
