import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = (props) => {
  return (
    <div className="flex">
      <aside className="w-72 p-5 bg-gray-200">
        <h2 className="text-xl font-semibold">Your Content</h2>
        <p className="mt-2">
          Add any content you want here, like contact information, a form, or
          any other details.
        </p>
      </aside>
      <div className="flex-1">
        <Map
          google={props.google}
          style={mapContainerStyle}
          initialCenter={center}
          zoom={10}
          containerStyle={{
            position: "relative",
            width: "100%",
            height: "400px",
          }}
        >
          <Marker position={center} />
        </Map>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "YOUR_API_KE",
})(Contact);
