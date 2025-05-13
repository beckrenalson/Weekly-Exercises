import React, { useState, useEffect } from "react";
import './App.css';

const BusStopComponent = () => {
  const [stopInfo, setBusStop] = useState({});
  const [stopId, setStopId] = useState('');
  const [tripInfo, setTripInfo] = useState([]);
  const [date, setDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [hourRange, setHourRange] = useState('');


  const BusStopData = async () => {
    if (!stopId) return;

    const atApiUrl = `https://pp-api.at.govt.nz/gtfs/v3/stops/${stopId}`;
    const newApiUrl = `https://pp-api.at.govt.nz/gtfs/v3/stops/${stopId}/stoptrips?filter[date]=${date}&filter[start_hour]=${startHour}&filter[hour_range]=${hourRange}`;

    try {
      const response = await fetch(newApiUrl, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': import.meta.env.VITE_AT_SUBSCRIPTION_API_KEY,
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setTripInfo(data.data[0].attributes);
    } catch (error) {
      console.error('Error fetching bus stop data:', error);
    }

    try {
      const response = await fetch(atApiUrl, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': import.meta.env.VITE_AT_SUBSCRIPTION_API_KEY,
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBusStop(data.data.attributes);
    } catch (error) {
      console.error('Error fetching bus stop data:', error);
    }
  };

  const handleInputChangeID = (event) => {
    setStopId(event.target.value);
  };

  const handleInputChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleInputChangeHour = (event) => {
    setStartHour(event.target.value);
  };

  const handleInputChangeRange = (event) => {
    setHourRange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    BusStopData();
  };

  return (
    <div className="container">
      <h1>Bus stop</h1>
      <h2>Stop: {stopInfo.stop_name || 'N/A'}</h2>
      <p>Location: Lat: {stopInfo.stop_lat}, Lon: {stopInfo.stop_lon}</p>
      <p>Stop Code: {stopInfo.stop_code || 'N/A'}</p>
      <p>Arrival Time: {tripInfo?.arrival_time?.substring(0, 5)  || 'N/A'}</p>
      <p>Destination: {tripInfo?.stop_headsign  || 'N/A'}</p>
      <p>Route: {tripInfo?.route_id?.split('-')[0]  || 'N/A'}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="STOP ID"
          value={stopId}
          onChange={handleInputChangeID}
        />
        <input
          type="text"
          placeholder="Date (e.g. YYYY-MM-DD)"
          value={date}
          onChange={handleInputChangeDate}
        />
        <input
          type="text"
          placeholder="Current Hour"
          value={startHour}
          onChange={handleInputChangeHour}
        />
        <input
          type="text"
          placeholder="Hour Range"
          value={hourRange}
          onChange={handleInputChangeRange}
        />
        <button type="submit" title="send">Fetch  Data</button>
      </form>
    </div>
  );
};

export default BusStopComponent;