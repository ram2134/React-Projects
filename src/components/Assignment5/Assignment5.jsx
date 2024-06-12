import React, { useState } from "react";
import axios from "axios";
import "./Assignment5.css";

function Assignment5() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGitHubUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
      setError("");
    } catch (err) {
      setError("User not found");
      setUserData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGitHubUser();
  };

  return (
    <div className="container">
      <h1>GitHub Info Card</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Fetch Info</button>
      </form>
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="card">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="avatar"
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <ul>
            <li>
              <strong>Followers:</strong> {userData.followers}
            </li>
            <li>
              <strong>Following:</strong> {userData.following}
            </li>
            <li>
              <strong>Public Repos:</strong> {userData.public_repos}
            </li>
          </ul>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Assignment5;
