import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  RouteButton,
  FullscreenControl,
} from "@pbe/react-yandex-maps";

const YandexMaps = () => {
  return (
    <YMaps>
      <Map
      width={'550px'}
      height={'400px'}
        defaultState={{
          center: [41.310629, 69.278123],
          zoom: 9,
        }}
      >
        <Placemark defaultGeometry={[55.751574, 37.573856]} />
      </Map>
    </YMaps>
    // <div className="relative w-5/12 h-[564px]">
    //   <YMaps>
    //     <div className="mapBox">
    //       <Map
    //         width="100%"
    //         height="100%"
    //         defaultState={{
    //           center: [41.310629, 69.278123],
    //           zoom: 15,
    //           controls: [],
    //         }}
    //       >
    //         <Placemark geometry={[41.310629, 69.278123]} />
    //         <GeolocationControl options={{ float: "right" }} />
    //         <RouteButton options={{ float: "left" }} />
    //         <FullscreenControl />
    //       </Map>
    //     </div>
    //   </YMaps>
    // </div>
  );
};

export default YandexMaps;
