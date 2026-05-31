import type { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "Asociaciones Gremiales (DL 2.757) | 360 Los Ríos",
  description:
    "Guía práctica del Decreto Ley N° 2.757 sobre asociaciones gremiales en Chile: constitución, registro, directorio, patrimonio, fiscalización y disolución. Explicado en lenguaje simple para socios.",
};

export default function AsociacionesGremialesPage() {
  return <Dashboard />;
}
