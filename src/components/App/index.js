import React, { useState } from 'react';
import { ReservoirProvider } from '../../data/ReservoirContext';
import { HomePage } from '../../pages/Home';

export const App = () => {
  const [reservoirData, setReservoirData] = useState(null);
  return (
    <ReservoirProvider value={{ reservoirData, setReservoirData }}>
      <HomePage />
    </ReservoirProvider>
  );
};
