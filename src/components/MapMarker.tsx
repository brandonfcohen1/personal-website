import { Popup, Marker } from "react-map-gl/maplibre";
import { useState } from "react";

type MapMarkerProps = {
  longitude: number;
  latitude: number;
  title: string;
  description: string;
};

export function MapMarker({
  longitude,
  latitude,
  title,
  description,
}: MapMarkerProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  return (
    <>
      {isPopupVisible && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor="top"
          closeButton={false}
          onClose={() => setIsPopupVisible(false)}
          className="rounded-xl overflow-hidden [&_.maplibregl-popup-content]:rounded-xl"
        >
          <div className="font-noto-sans relative text-center">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </Popup>
      )}
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
        className="cursor-pointer"
        onClick={() => setIsPopupVisible(!isPopupVisible)}
      />
    </>
  );
}
