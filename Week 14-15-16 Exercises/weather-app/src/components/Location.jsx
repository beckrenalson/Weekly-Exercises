import { useState, useEffect } from 'react'

function Location({ longitude, latitude }) {

    const [location, setLocation] = useState();

    const locationData = async () => {
        const locationResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        const locationData = await locationResponse.json();
        setLocation(locationData);
    }

    useEffect(() => {
        locationData();
    }, [longitude, latitude])

    return (
        <>
            {location &&

                <h2>{`Location:  ${location.address.house_number ?? ""} ${location.address.road ?? ""} ${location.address.neighbourhood ?? ""} ${location.address.state ?? ""} ${location.address.country ?? ""}`}</h2>}
        </>
    )
}
export default Location

