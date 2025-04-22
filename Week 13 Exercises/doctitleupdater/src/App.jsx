import { useState, useEffect } from 'react'
import './App.css'

function TitleUpdater() {
  const [title, setTitle] = useState("");

  
  // Add your useEffect here
  useEffect(() => {
    const ogTitle = document.title;

    document.title = title || ogTitle;

    // return () => {
    //   document.title = ogTitle;
    // }
  }, [title]);  

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Type a page title"
      />
      <p>Check your browser tab to see the title change!</p>
    </div>
  );
}
export default TitleUpdater