import dynamic from "next/dynamic";
import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { GlobeMethods, GlobeProps } from "react-globe.gl";
import * as interRegular from "./inter-regular.json";

interface GlobeLabelData {
  lat: number;
  lng: number;
  name: string;
}

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

  const props: GlobeProps = {
    labelsData: [
      { name: "$ USD", lat: 40.7128, lng: -74.006 }, // New York
      { name: "€ EUR", lat: 51.5074, lng: -0.1278 }, // London
      { name: "¥ JPY", lat: 35.6762, lng: 139.6503 }, // Tokyo
      { name: "¥ CNY", lat: 31.2304, lng: 121.4737 }, // Shanghai
      { name: "₣ CHF", lat: 47.3769, lng: 8.5417 }, // Zurich
      { name: "$ SGD", lat: 1.3521, lng: 103.8198 }, // Singapore
      { name: "$ AUD", lat: -33.8688, lng: 151.2093 }, // Sydney
      { name: "$ HKD", lat: 22.3193, lng: 114.1694 }, // Hong Kong
    ],
    // @ts-expect-error GlobeProps is not typed
    labelLat: (d: GlobeLabelData) => d.lat,
    // @ts-expect-error GlobeProps is not typed
    labelLng: (d: GlobeLabelData) => d.lng,
    // @ts-expect-error GlobeProps is not typed
    labelText: (d: GlobeLabelData) => d.name,
    labelSize: 0.8,
    labelDotRadius: 0.4,
    labelColor: () => "rgba(255, 255, 255, 0.25)",
    labelAltitude: 0.01,
    labelTypeFace: interRegular,
    // labelResolution: 10,
    cameraPosition: { x: undefined, y: 10300, z: undefined },
  };

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: 40.7128,
        lng: -74.006,
        altitude: 1,
      },
      startTime
    );
    globeRef.current.controls().enableZoom = false;
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 1;
  }, [globeReady]);

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

  return (
    <div style={{ width: "100%", height: "100%" }} ref={globeContainerRef}>
      <GlobeForwarded
        ref={globeRef}
        {...props}
        onGlobeReady={() => setGlobeReady(true)}
        globeImageUrl="/transfer-funds/images/earth-dark.jpg"
        showAtmosphere={true}
        animateIn={true}
        arcDashAnimateTime={180}
        arcDashLength={150}
        arcDashGap={250}
        width={globeWidth}
        height={globeHeight}
      />
    </div>
  );
}
