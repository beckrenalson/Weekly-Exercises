import { useState } from 'react'
import './App.css'

const App = () => {
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const VehiclePositions = async () => {
    setIsLoading(true);

    const ApiUrl = `https://pp-api.at.govt.nz/realtime/legacy/vehiclelocations/`

    try {
      const response = await fetch(ApiUrl, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': import.meta.env.VITE_KEY,
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)

      setVehicleInfo(data.response.entity)
    } catch (error) {
      console.error('Error fetching data', error)
    } finally {
      setIsLoading(false)
    }
  }

  const submit = () => {
    VehiclePositions()
  }

  return (
    <>
{isLoading && <div>Loading...</div>}

      <div>
        <h1>Vehicle Postions</h1>
        <button onClick={submit}>Fetch Data</button>
      </div>
      <div>
        <ul>
          {vehicleInfo && vehicleInfo.map((element, index) => (
            <li key={index}>
              <h2>License Plate: {element.vehicle.vehicle.license_plate}</h2>
              <p>ID: {element.id}</p>
              <p>Latitude: {element.vehicle.position.latitude}</p>
              <p>Longitude: {element.vehicle.position.longitude}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default App
