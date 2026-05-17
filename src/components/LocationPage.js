import React from 'react';
import { useParams } from 'react-router-dom';
import { locations } from '../data/locations';
import LocationLayout from './LocationLayout';

import Sikkim from './Location/Sikkim';
import Ladakh from './Location/Ladakh';
import KulluManali from './Location/KulluManali';
import Rishikesh from './Location/Rishikesh';
import Kashmir from './Location/Kashmir';
import Goa from './Location/Goa';
import Jaipur from './Location/Jaipur';
import Kerala from './Location/Kerala';
import Andaman from './Location/Andaman';
import ArunachalPradesh from './Location/ArunachalPradesh';
import Uttarakhand from './Location/Uttarakhand';
import NorthEast from './Location/NorthEast';
import Bhutan from './Location/Bhutan';

const LocationPage = () => {
  const { location } = useParams();
  
  const locationComponents = {
    Sikkim,
    Ladakh,
    KulluManali,
    Rishikesh,
    Kashmir,
    Goa,
    Jaipur,
    Kerala,
    Andaman,
    ArunachalPradesh,
    Uttarakhand,
    NorthEast,
    Bhutan,
  };

  const LocationComponent = locationComponents[location];
  const locationData = locations.find(loc => loc.id === location);

  return LocationComponent ? (
    <LocationLayout locationData={locationData}>
      <LocationComponent />
    </LocationLayout>
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20">
      <h1 className="text-3xl font-bold text-red-600">Location Not Found</h1>
      <p className="text-gray-600 mt-4">The requested location does not exist.</p>
    </div>
  );
};

export default LocationPage;