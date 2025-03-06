import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import ServiceSelector from "@/components/services/ServiceSelector";
import { cities, states } from "@/lib/data/locations";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.service);

  if (!service) {
    return {};
  }

  const city = cities[0];
  const state = states[0];
  const url = `https://frankandsonsexterminators.com/services/${service.slug}`;

  return {
    title: `${service.name} in ${city.name}, ${state.abbreviation} | Frank And Sons Exterminators`,
    description: service.description,
    openGraph: {
      title: `${service.name} in ${city.name}, ${state.abbreviation} | Frank And Sons Exterminators`,
      description: service.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} in ${city.name}, ${state.abbreviation} | Frank And Sons Exterminators`,
      description: service.description,
    },
    alternates: {
      canonical: url,
    },
    keywords: `${service.name.toLowerCase()}, pest control, ${service.name.toLowerCase()} near me, pest extermination, residential pest control, commercial pest control, pest control expert`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  const city = cities[0];
  const state = states[0];

  return <ServiceSelector serviceId={service.id} city={city} state={state} />;
}