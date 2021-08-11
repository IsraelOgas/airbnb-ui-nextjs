import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search results into the { latitude: 12.345678, longitude: -12.345678 } Object
  const coords = searchResults.map((location) => ({
    longitude: location.long,
    latitude: location.lat,
  }));

  // The lat & long of the center of locations coords
  const center = getCenter(coords);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/israelogas/cks6sbbrm171l17p30iccx86v"
      mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((location) => (
        <div key={location.long}>
          <Marker
            longitude={location.long}
            latitude={location.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p role="img" onClick={ () => setSelectedLocation(location) } className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin">📌</p>
          </Marker>

          {/* The popup that should show if we click on a marker */}
          {selectedLocation.long === location.long && (
              <Popup
                className="z-50"
                closeOnClick
                onClose={ () => setSelectedLocation({}) }
                latitude={location.lat}
                longitude={location.long}
              >
                  {location.title}
              </Popup>
          )}
        </div>
      ))}
      
    </ReactMapGL>
  );
};

export default Map;
