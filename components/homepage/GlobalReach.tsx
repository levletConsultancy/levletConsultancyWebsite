import DottedMap from "dotted-map";
import MainHeading from "@/components/common/MainHeading";

const PIN_LOCATIONS = [
  { name: "us", lat: 39.8283, lng: -98.5795 },
  { name: "canada", lat: 56.1304, lng: -106.3468 },
  { name: "nairobi", lat: -1.2921, lng: 36.8219 },
  { name: "kampala", lat: 0.3476, lng: 32.5825 },
  { name: "dar-es-salaam", lat: -6.7924, lng: 39.2083 },
];

const PIN_COLOR = "#6E1B2C";

const map = new DottedMap({ height: 55, grid: "diagonal" });

PIN_LOCATIONS.forEach(({ name, lat, lng }) => {
  map.addPin({
    lat,
    lng,
    data: { name },
    svgOptions: { color: PIN_COLOR, radius: 0.6 },
  });
});

const mapSvg = map.getSVG({
  radius: 0.22,
  color: "#D9D3CE",
  shape: "circle",
  backgroundColor: "transparent",
});


const MAP_VIEWBOX = "0 0 109 55";
const pinPoints = map
  .getPoints()
  .filter((point): point is typeof point & { data: { name: string } } =>
    Boolean(point.data)
  );

const regions = [
  "Kenya & East Africa",
  "United States",
  "Canada",
  "Virtual Support Worldwide",
];

export default function GlobalReach() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <MainHeading
          title="Supporting clients across the globe"
          subtitle="Global Outreach"
        />
        <p className="mt-5 text-neutral-500">
          No matter where you are, Levlet delivers financial and eCitizen
          expertise tailored to Kenyan regulations and global ambitions.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_260px]">
     
        <div className="relative w-full aspect-[109/55]">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
            alt="Map highlighting Levlet's presence in the United States, Canada, Kenya, Uganda, and Tanzania"
            className="absolute inset-0 h-full w-full"
          />

          <svg
            viewBox={MAP_VIEWBOX}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {pinPoints.map((point) => (
              <circle
                key={point.data.name}
                cx={point.x}
                cy={point.y}
                r={0.9}
                fill={PIN_COLOR}
                fillOpacity={0.5}
                className="animate-ping"
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            ))}
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          {regions.map((region) => (
            <div
              key={region}
              className="rounded-md bg-white px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-neutral-900 shadow-sm"
            >
              {region}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}