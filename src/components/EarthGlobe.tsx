"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false }) as any;

// Zemlje gde se priča nemački (primarni) i engleski (sekundarni)
const DE_SET = new Set(["DE", "AT", "CH", "LI", "LU"]);
const EN_SET = new Set(["GB", "US", "IE", "CA", "AU", "NZ"]);

const GREEN = "rgba(134, 196, 64, 0.92)";
const BLUE = "rgba(62, 143, 208, 0.92)";
const LAND = "rgba(146, 170, 190, 0.20)";

// tamna „voda" — pun jednobojni sloj umesto realne teksture (silueta)
const OCEAN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%230b1726'/%3E%3C/svg%3E";

export function EarthGlobe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState(0);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setSize(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let alive = true;
    fetch("/data/countries.geojson")
      .then((r) => r.json())
      .then((geo) => {
        if (alive) setPolygons(geo.features);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const g = globeRef.current;
    if (!ready || !g) return;
    const controls = g.controls();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    controls.autoRotate = !reduce;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.enablePan = false;
    g.pointOfView({ lat: 34, lng: -10, altitude: 1.85 }, 0);
  }, [ready, size]);

  const group = (d: any) => {
    const c = d.properties.ISO_A2;
    if (DE_SET.has(c)) return "de";
    if (EN_SET.has(c)) return "en";
    return "other";
  };

  const capColor = (d: any) => {
    const grp = group(d);
    if (grp === "de") return GREEN;
    if (grp === "en") return BLUE;
    return LAND;
  };

  const altitude = (d: any) => (group(d) === "other" ? 0.006 : 0.02);

  const stroke = (d: any) =>
    group(d) === "other" ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.55)";

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-square w-full max-w-[34rem] lg:-mr-6"
    >
      {/* meki sjaj iza planete */}
      <div className="pointer-events-none absolute inset-[6%] rounded-full bg-secondary/20 blur-3xl" />

      {size > 0 && (
        <Globe
          ref={globeRef}
          width={size}
          height={size}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl={OCEAN}
          showAtmosphere
          atmosphereColor="#6fb0e3"
          atmosphereAltitude={0.2}
          polygonsData={polygons}
          polygonAltitude={altitude}
          polygonCapColor={capColor}
          polygonSideColor={() => "rgba(255,255,255,0.05)"}
          polygonStrokeColor={stroke}
          onGlobeReady={() => setReady(true)}
        />
      )}

      {/* legenda */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          Nemački
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          Engleski
        </span>
      </div>
    </div>
  );
}
