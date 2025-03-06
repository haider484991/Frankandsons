interface City {
  name: string;
}

interface State {
  abbreviation: string;
}

interface ServiceContent {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  commonIssues: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
    icon?: string;
  }[];
  serviceAreas: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const getLocationBasedContent = (template: string, city?: City, state?: State): string => {
  if (!city || !state) {
    return template
      .replace(/\[city\]/g, 'your area')
      .replace(/\[st\]/g, '')
      .replace(/In your area,\s*/g, '')
      .replace(/\s+,\s+,/g, ',');
  }
  return template.replace(/\[city\]/g, city.name).replace(/\[st\]/g, state.abbreviation);
};

export interface Service {
  id: string;
  title: string;
  name: string;
  description: string;
  slug: string;
  features: string[];
  image: string;
  alt: string;
  benefits?: string[];
  priceRange?: string;
  warranty?: string;
  contentTemplate?: (city?: City, state?: State) => string;
}

export const getPestControlContent = (city: City, state: State): ServiceContent => ({
  title: `${city.name} ${state.abbreviation} Pest Control and Exterminators | Frank And Sons Exterminators`,
  description: `Pest control ${city.name} ${state.abbreviation}. For insects, rodents, bed bugs, fleas, ants, roaches, spiders, yellow jackets, wasps, mosquitoes, flies, etc. Call today!`,
  
  features: [
    {
      title: "Insect Control",
      description: "Expert insect control services for bed bugs, ants, cockroaches, spiders, and more."
    },
    {
      title: "Rodent Control",
      description: "Comprehensive rodent control solutions to eliminate mice, rats, and prevent future infestations."
    },
    {
      title: "Residential Pest Control",
      description: "Specialized pest control services for homes, protecting your family from unwanted pests."
    },
    {
      title: "Commercial Pest Control",
      description: "Professional pest management for businesses, restaurants, hotels, and industrial facilities."
    }
  ],
  
  commonIssues: [
    {
      title: "Bed Bug Infestations",
      description: "Bed bugs can hide in mattresses, furniture, and cracks, requiring professional treatment for complete elimination."
    },
    {
      title: "Ant Colonies",
      description: "Ant infestations can be persistent and difficult to eliminate without targeting the colony source."
    },
    {
      title: "Rodent Intrusions",
      description: "Rodents can cause structural damage and spread diseases, requiring comprehensive removal and prevention strategies."
    },
    {
      title: "Seasonal Pest Problems",
      description: "Different seasons bring different pest challenges, requiring adaptive pest control approaches."
    }
  ],
  
  benefits: [
    {
      title: "Comprehensive Solutions",
      description: "We provide full-service pest control solutions tailored to residential and commercial properties."
    },
    {
      title: "Expert Technicians",
      description: "Our network includes highly trained professionals who are experts in treating all types of pests."
    },
    {
      title: "Customized Prevention",
      description: "We develop customized pest prevention plans to protect your property from future infestations."
    },
    {
      title: "Environmentally Responsible",
      description: "Our pest control methods prioritize safety for your family, pets, and the environment."
    }
  ],
  
  serviceAreas: [
    `${city.name} ${state.abbreviation}`,
    "Surrounding Areas"
  ],
  
  faqs: [
    {
      question: "How quickly can you respond to a pest emergency?",
      answer: "We prioritize pest emergencies and can typically schedule an inspection within 24-48 hours of your call, with same-day service available for urgent situations."
    },
    {
      question: "Are your pest control methods safe for children and pets?",
      answer: "Yes, our pest control professionals use environmentally responsible methods that are safe for families and pets when used as directed. We'll provide specific safety instructions for each treatment."
    },
    {
      question: "How many treatments will be needed to eliminate pests?",
      answer: "The number of treatments depends on the type of pest and severity of infestation. Some issues can be resolved in a single visit, while others may require follow-up treatments to ensure complete elimination."
    },
    {
      question: "Do you offer ongoing pest prevention plans?",
      answer: "Yes, we offer customized prevention plans with regular inspections and treatments to keep your property pest-free year-round. These plans are especially valuable for businesses and homes in areas prone to pest activity."
    }
  ]
});

export const services: Service[] = [
  {
    id: "pest-control",
    title: "Pest Control Services",
    name: "Pest Control",
    description: "Professional pest control and extermination services for residential and commercial properties.",
    slug: "pest-control",
    features: [
      "Insect Control - Bed bugs, ants, roaches, spiders, wasps, mosquitoes",
      "Rodent Control - Mice and rat removal and prevention",
      "Commercial Pest Management",
      "Residential Pest Solutions",
      "Preventive Pest Control",
      "Emergency Pest Services"
    ],
    image: "pest-control-service.webp",
    alt: "Professional Pest Control Services",
    benefits: [
      "24/7 Emergency Service",
      "Licensed & Insured Professionals",
      "Eco-Friendly Solutions",
      "Guaranteed Results"
    ],
    priceRange: "Starting at $99",
    warranty: "100% Satisfaction Guarantee"
  }
];