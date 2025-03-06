"use client";

import { City, State } from "@/lib/types";
import dynamic from "next/dynamic";

const PestControl = dynamic(() => import("./PestControl"), {
  ssr: false,
});

interface ServiceSelectorProps {
  serviceId: string;
  city: City;
  state: State;
}

export default function ServiceSelector({
  serviceId,
  city,
  state,
}: ServiceSelectorProps) {
  switch (serviceId) {
    case "pest-control":
      return <PestControl city={city} state={state} />;
    default:
      return <PestControl city={city} state={state} />;
  }
}