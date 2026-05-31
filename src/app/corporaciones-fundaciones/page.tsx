import type { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "Corporaciones y Fundaciones (Código Civil y Ley 20.500) | 360 Los Ríos",
  description:
    "Guía práctica de las personas jurídicas sin fines de lucro en Chile: corporaciones y fundaciones según el Código Civil (arts. 545-564) y la Ley 20.500. Constitución, registro, gobierno, patrimonio, fiscalización y disolución, en lenguaje simple.",
};

export default function CorporacionesFundacionesPage() {
  return <Dashboard />;
}
