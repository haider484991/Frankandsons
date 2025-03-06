import cityCoordinatesData from './citycoordinates.json';

// Types
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface WeatherData {
  annualRainfall: number;
  rainyDays: number;
}

export interface City {
  id: string;
  name: string;
  stateId: string;
  stateAbbr: string;
  population: number;
  description: string;
  coordinates: Coordinates;
  weatherData: WeatherData;
}

export interface State {
  id: string;
  abbreviation: string;
  name: string;
  majorCities: string[];
  neighboringStates: string[];
  population: number;
  description: string;
}

interface CityCoordinateData {
  city: string;
  state_id: string;
  state_name: string;
  lat: number;
  lng: number;
  population: number;
}

// Generate California cities
export const californiaCities = (cityCoordinatesData as CityCoordinateData[])
  .filter(city => city.state_id === 'CA')
  .map(city => city.city)
  .sort();

// Helper function to generate city description
const getCityDescription = (cityName: string): string => {
  return `${cityName} is a major city in California, known for its excellent pest control services.`;
};

// States data for California
export const states: State[] = [{
  id: 'california',
  abbreviation: 'CA',
  name: 'California',
  majorCities: (cityCoordinatesData as CityCoordinateData[])
    .filter(city => city.state_id === 'CA')
    .map(city => city.city)
    .sort(),
  neighboringStates: ['OR', 'NV', 'AZ'],
  population: 39512223,
  description: 'California is known for its diverse landscape, vibrant cities, and excellent pest control services.'
}];

export const generateCityData = (state: State): City[] => {
  // Only generate data for California
  if (state.id !== 'california') {
    return [];
  }

  return state.majorCities.map(cityName => {
    const cityData = (cityCoordinatesData as CityCoordinateData[]).find(
      city => city.city === cityName && city.state_id === state.abbreviation
    );

    return {
      id: `${cityName.toLowerCase().replace(/\s+/g, '-')}-ca`,
      name: cityName,
      stateId: state.id,
      stateAbbr: state.abbreviation,
      population: cityData?.population || 0,
      description: getCityDescription(cityName),
      coordinates: {
        lat: cityData?.lat || 0,
        lng: cityData?.lng || 0
      },
      weatherData: {
        annualRainfall: 0,
        rainyDays: 0
      }
    };
  });
};

// Generate all cities data
export const cities: City[] = states.flatMap(state => generateCityData(state));

// Helper function to get a city by its ID
export const getCityById = (cityId: string): City | undefined => {
  return cities.find(city => city.id === cityId);
};

// Helper function to get a state by its ID
export const getStateById = (stateId: string): State | undefined => {
  return states.find(state => state.id === stateId);
};

// Helper function to get cities by state ID
export const getCitiesByState = (stateId: string): City[] => {
  return cities.filter(city => city.stateId === stateId);
};
