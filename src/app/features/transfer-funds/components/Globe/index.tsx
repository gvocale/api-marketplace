import dynamic from "next/dynamic";
import * as THREE from "three";
import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { GlobeMethods, GlobeProps } from "react-globe.gl";
// import * as interRegular from "./inter-regular.json";
// import * as d3 from "d3";
import countriesGeoJson from "./countries.json";
// import { CAPITAL_CITIES } from "./data";

// interface GlobeLabelData {
//   lat: number;
//   lng: number;
//   name: string;
// }

const GlobeTmpl = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});
const GlobeForwarded = forwardRef<GlobeMethods, GlobeProps>((props, ref) => (
  <GlobeTmpl {...props} ref={ref as MutableRefObject<GlobeMethods>} />
));

GlobeForwarded.displayName = "GlobeForwarded";

export function Globe() {
  const globeRef = useRef<GlobeMethods | null>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const startTime = 1000;
  const [globeWidth, setGlobeWidth] = useState(0);
  const [globeHeight, setGlobeHeight] = useState(0);

  // const props: GlobeProps = {
  //   labelsData: CAPITAL_CITIES.map((city) => ({
  //     name: `${city.currency} ${city.city}`,
  //     lat: city.lat,
  //     lng: city.lng,
  //   })),
  //   // @ts-expect-error GlobeProps is not typed
  //   labelLat: (d: GlobeLabelData) => d.lat,
  //   // @ts-expect-error GlobeProps is not typed
  //   labelLng: (d: GlobeLabelData) => d.lng,
  //   // @ts-expect-error GlobeProps is not typed
  //   labelText: (d: GlobeLabelData) => d.name,
  //   labelSize: 0.5,
  //   labelDotRadius: 0.4,
  //   labelColor: () => "rgba(255, 255, 255, 0.25)",
  //   labelAltitude: 0.01,
  //   labelTypeFace: interRegular,
  //   // labelResolution: 10,
  //   cameraPosition: { x: undefined, y: 10300, z: 200 },
  // };

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: 40.7128,
        lng: -74.006,
        altitude: 2,
      },
      startTime
    );
    globeRef.current.controls().enableZoom = false;
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 1;

    // const CLOUDS_IMG_URL = "/transfer-funds/images/clouds.png";
    // const CLOUDS_ALT = 0.001;
    // const CLOUDS_ROTATION_SPEED = -0.001; // deg/frame

    // new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
    //   if (!globeRef.current) return;
    //   const clouds = new THREE.Mesh(
    //     new THREE.SphereGeometry(
    //       globeRef.current.getGlobeRadius() * (1 + CLOUDS_ALT),
    //       75,
    //       75
    //     ),
    //     new THREE.MeshPhongMaterial({
    //       map: cloudsTexture,
    //       transparent: true,
    //       opacity: 0.25,
    //     })
    //   );
    //   globeRef.current.scene().add(clouds);

    //   (function rotateClouds() {
    //     clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
    //     requestAnimationFrame(rotateClouds);
    //   })();
    // });
  }, [globeReady, globeRef]);

  useEffect(() => {
    if (!globeContainerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setGlobeWidth(width);
        setGlobeHeight(height);
      }
    });

    resizeObserver.observe(globeContainerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // const [airports, setAirports] = useState([]);
  // const [routes, setRoutes] = useState([]);
  // const [hoverArc, setHoverArc] = useState();

  return (
    <div style={{ width: "100%", height: "100%" }} ref={globeContainerRef}>
      <GlobeForwarded
        ref={globeRef}
        // {...props}
        // arcsData={routes}
        // arcLabel={(d) => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`}
        // arcStartLat={(d) => +d.srcAirport.lat}
        // arcStartLng={(d) => +d.srcAirport.lng}
        // arcEndLat={(d) => +d.dstAirport.lat}
        // arcEndLng={(d) => +d.dstAirport.lng}
        // arcDashLength={0.4}
        // arcDashGap={0.2}
        // arcDashAnimateTime={1500}
        // arcsTransitionDuration={0}
        // arcColor={(d) => {
        //   const op = !hoverArc ? OPACITY : d === hoverArc ? 0.9 : OPACITY / 4;
        //   return [`rgba(0, 255, 0, ${op})`, `rgba(255, 0, 0, ${op})`];
        // }}
        // onArcHover={setHoverArc}
        // pointsData={airports}
        // pointColor={() => "orange"}
        // pointAltitude={0}
        // pointRadius={0.04}
        // pointsMerge={true}
        onGlobeReady={() => setGlobeReady(true)}
        // globeImageUrl="/transfer-funds/images/earth-blue-marble.jpg"
        // globeImageUrl="/transfer-funds/images/earth-dark.jpg"
        // globeImageUrl="/transfer-funds/images/earth-night.jpg"
        // bumpImageUrl="/transfer-funds/images/earth-topology.png"
        // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeMaterial={new THREE.MeshPhongMaterial({ color: "#111736" })}
        showAtmosphere={true}
        animateIn={true}
        // arcDashAnimateTime={180}
        // arcDashLength={150}
        // arcDashGap={250}
        width={globeWidth}
        height={globeHeight}
        hexPolygonsData={countriesGeoJson.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        // hexPolygonUseDots={true}
        hexPolygonColor={() => "#a5add450"}

        // hexPolygonColor={() =>
        //   `#${Math.round(Math.random() * Math.pow(2, 24))
        //     .toString(16)
        //     .padStart(6, "0")}`
        // }
      />
    </div>
  );
}
