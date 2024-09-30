import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = [-3.745, -38.523];

const Contact = () => {
  console.log("Contact component rendered");
  return (
    <div className="flex">
      <aside className="w-72 p-5 bg-gray-200"></aside>
      <div className="flex-1">
        <YMaps>
          <Map
            defaultState={{ center: center, zoom: 10 }}
            style={mapContainerStyle}
          >
            <Placemark geometry={center} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
export default Contact;
