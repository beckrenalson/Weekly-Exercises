import { useState } from 'react'
import './App.css'

function App() {
  const [stopId, setStopId] = useState('');
  const [stopInfo, setStopInfo] = useState('');

  const atApiUrl = `https://pp-api.at.govt.nz/gtfs/v3/stops/${stopId}`;

  const getStopId = async () => {
    const response = await fetch(atApiUrl, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': 'c252b20f57e545429993545ed5e4b3c3',
      }
    });

    const data = await response.json();
    setStopInfo(data.data.attributes);

    console.log(data)
  }

  const submit = async () => {
    await getStopId()
  }

  return (
    <>
      <h1>Auckland Bus Stop Checker</h1>
      <div className="userInput">
        <label>Bus Stop ID:</label>
        <input
          name="bus-stop" type="text"
          placeholder="Enter bus stop ID"
          value={stopId}
          onChange={(e) => setStopId(e.target.value)}
        />

        <button
          onClick={submit}
          className="submitBtn"
        >Submit
        </button>
      </div>

      <div>
        <h2>Stop: {stopInfo.stop_name || 'N/A'}</h2>
        <p>Stop Code: {stopInfo.stop_code || 'N/A'}</p>
        <p>Location: Lat: {stopInfo.stop_lat}, Lon: {stopInfo.stop_lon}</p>
      </div>
    </>
  )
}

export default App
