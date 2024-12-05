import dynamic from "next/dynamic";
const GlobeComponent = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
  }
);

interface CountryProperties {
  ADMIN: string;
  ISO_A2: string;
  POP_EST: number;
}

export function Globe() {
  return (
    <GlobeComponent
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonUseDots={true}
      hexPolygonColor={() =>
        `#${Math.round(Math.random() * Math.pow(2, 24))
          .toString(16)
          .padStart(6, "0")}`
      }
      // @ts-expect-error properties is not typed
      hexPolygonLabel={({ properties }: { properties: CountryProperties }) => {
        return `
          <b>${properties.ADMIN} (${properties.ISO_A2})</b> <br />
          Population: <i>${properties.POP_EST}</i>
        `;
      }}
    />
  );
}
