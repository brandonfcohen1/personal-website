"use client";

import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapMarker } from "@/components/MapMarker";
import { locations } from "@/data/locations";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh]">
      <div className="w-full h-full">
        <Map
          initialViewState={{
            longitude: -77.559239,
            latitude: 41.441944,
            zoom: 5,
          }}
          clickTolerance={0}
          mapStyle="https://api.maptiler.com/maps/862bf61f-f719-4d20-b8a0-8124921ada85/style.json?key=mBsahKmoNbiyaV92NB6s"
        >
          {locations.map((location, index) => (
            <MapMarker key={`marker-${index}`} {...location} />
          ))}
        </Map>
      </div>
      <Overview />
    </main>
  );
}
