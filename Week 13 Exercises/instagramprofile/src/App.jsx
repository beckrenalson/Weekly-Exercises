import { useEffect, useState } from 'react'
import './App.css'

function InstagramProfileForm() {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [bio, setBio] = useState(() => localStorage.getItem("bio") || "");
  const [website, setWebsite] = useState(() => localStorage.getItem("website") || "");
  
  // Add your useEffect hooks here
  useEffect(() => {
    localStorage.setItem("username", username.toString());
    localStorage.setItem("bio", bio.toString());
    localStorage.setItem("website", website.toString());
  }, [username, bio, website]);
  
  return (
    <div className="instagram-profile">
      <h2>Edit Profile</h2>
      <div className="form-group">
        <label>Username</label>
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      
      <div className="form-group">
        <label>Bio</label>
        <textarea 
          value={bio}
          onChange={e => setBio(e.target.value)}
          placeholder="Write a short bio..."
        />
      </div>
      
      <div className="form-group">
        <label>Website</label>
        <input 
          type="url"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          placeholder="https://example.com"
        />
      </div>
      
      <p className="auto-save-hint">All changes are saved automatically</p>
    </div>
  );
}

export default InstagramProfileForm