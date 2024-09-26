import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css"
import { useTheme } from '@mui/material/styles';

// const YOUR_TOMTOM_API_KEY = '3YzQxwAFHF8yAMWxHfKrjbNN1U3WHarx';
const YOUR_TOMTOM_API_KEY=import.meta.env.VITE_LOCATION_API;

const LocateDoctor = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({ name: "", date: "", time: "" });
  const theme = useTheme();

  useEffect(() => {
    const initializeMap = () => {
      const newMap = tt.map({
        key: YOUR_TOMTOM_API_KEY,
        container: 'map',
        center: [0, 0], // Initial center
        zoom: 14
      });

      newMap.addControl(new tt.NavigationControl());
      setMap(newMap);

      return () => newMap.remove(); // Cleanup on component unmount
    };

    initializeMap();
  }, []);

  useEffect(() => {
    if (!map) return; // Wait for map initialization

    const createMarker = (lngLat, color, popupText, onClick) => {
      const marker = new tt.Marker({ color })
        .setLngLat(lngLat)
        .setPopup(new tt.Popup().setText(popupText))
        .addTo(map);

      if (onClick) {
        marker.getElement().addEventListener('click', () => onClick(lngLat));
      }
    };

    const getUserLocation = (callback) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback, (error) => {
          console.error("Error getting user location: ", error);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
  
    const fetchNearbyLocations = (userLocation) => {
      const searchUrl = `https://api.tomtom.com/search/2/nearbySearch.json?key=${YOUR_TOMTOM_API_KEY}&lat=${userLocation[1]}&lon=${userLocation[0]}&radius=5000&query=hospital,clinic,doctor&categorySet=7321`;

      axios.get(searchUrl)
        .then((response) => {
          const locations = response.data.results;
          if (!locations || locations.length === 0) {
            console.error("No locations found.");
            return;
          }

          const bounds = new tt.LngLatBounds();
          bounds.extend(userLocation);

          const hospitalsData = locations.map(location => ({
            id: location.id,
            position: location.position,
            poi: location.poi
          }));
          setHospitals(hospitalsData);

          locations.forEach((location) => {
            const position = [location.position.lon, location.position.lat];
            createMarker(position, 'red', location.poi.name, (targetLocation) => {
              drawRoute(userLocation, targetLocation);
            });
            bounds.extend(position);
          });

          map.fitBounds(bounds, { padding: 50 });
        })
        .catch((error) => {
          console.error("Error fetching nearby locations: ", error);
        });
    };
    getUserLocation((position) => {
      const userLocation = [position.coords.longitude, position.coords.latitude];
      setUserLocation(userLocation);
      map.setCenter(userLocation);

      createMarker(userLocation, 'blue', 'You are here');
      fetchNearbyLocations(userLocation);
    });

  }, [map]);


    const drawRoute = (start, end) => {
      const routeUrl = `https://api.tomtom.com/routing/1/calculateRoute/${start[1]},${start[0]}:${end[1]},${end[0]}/json?key=${YOUR_TOMTOM_API_KEY}&travelMode=car&traffic=true`;

      axios.get(routeUrl)
        .then((response) => {
          const routeData = response.data.routes[0];
          if (!routeData || !routeData.legs) {
            console.error("No route found.");
            return;
          }
          const geoJson = {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: routeData.legs[0].points.map(point => [point.longitude, point.latitude])
              }
            }]
          };

          if (map.getLayer('route')) {
            map.removeLayer('route');
            map.removeSource('route');
          }

          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: geoJson
            },
            paint: {
              'line-color': '#000000',
              'line-width': 6
            }
          });

          const routeBounds = new tt.LngLatBounds();
          geoJson.features[0].geometry.coordinates.forEach(coord => routeBounds.extend(coord));
          map.fitBounds(routeBounds, { padding: 50 });
        })
        .catch((error) => {
          console.error("Error drawing route: ", error);
        });
    };

    

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking details submitted:", bookingDetails);
    // Implement your booking logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <h1>Nearby Clinics, Hospitals, and Doctors</h1>
        <div id="map" style={{ width: '70vw', height: '70vh', margin: 'auto', display: 'block' }}></div>
  
        <ul style={{ 
          listStyleType: 'none', 
          padding: 0, 
          // margin: '20px 0', 
          maxWidth: '600px',  // Constrain the width of the list
          margin: '20px auto'  // Center the list horizontally
        }}>
          {hospitals.map((hospital) => (
            <li key={hospital.id} 
                onClick={() => {
                  setSelectedHospital(hospital);
                  drawRoute(userLocation, [hospital.position.lon, hospital.position.lat]);
                }} 
                style={{ 
                  cursor: 'pointer', 
                  padding: '12px 20px', 
                  border: '1px solid #ccc', 
                  marginBottom: '10px', 
                  borderRadius: '10px',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  backgroundColor: selectedHospital?.id === hospital.id ? '#e6f7ff' : 'white',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  maxWidth: '100%', // Avoids list taking full width
                  textAlign: 'left'  // Aligns text properly
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f8ff'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = selectedHospital?.id === hospital.id ? '#e6f7ff' : 'white'}
            >
              {hospital.poi.name}
            </li>
          ))}
        </ul>
  
        {selectedHospital && (
          <>
            <div style={{ 
              border: '1px solid #ddd', 
              padding: '20px', 
              marginTop: '20px', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              width: '100%', 
              maxWidth: '400px', 
              margin: 'auto',
              backgroundColor: '#fafafa'
            }}>
              <h2 style={{ marginBottom: '15px', color: '#333' }}>
                Book Appointment at {selectedHospital.poi.name}
              </h2>
              <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={bookingDetails.name} 
                  onChange={handleInputChange} 
                  required 
                  style={{ 
                    padding: '10px', 
                    width: '100%', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px' 
                  }}
                />
                <input 
                  type="date" 
                  name="date" 
                  value={bookingDetails.date} 
                  onChange={handleInputChange} 
                  required 
                  style={{ 
                    padding: '10px', 
                    width: '100%', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px' 
                  }}
                />
                <input 
                  type="time" 
                  name="time" 
                  value={bookingDetails.time} 
                  onChange={handleInputChange} 
                  required 
                  style={{ 
                    padding: '10px', 
                    width: '100%', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px' 
                  }}
                />
                <button 
                  type="submit" 
                  style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ff5353"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#330066'}
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}
export default LocateDoctor;
