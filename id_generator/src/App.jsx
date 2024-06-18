import React, { useState } from 'react';
import IDCardForm from './components/IdCardForm';
import IDCard from './components/IdCard';

const App = () => {
  const [idCardData, setIdCardData] = useState(null);

  const handleFormSubmit = (data) => {
    setIdCardData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <IDCardForm onSubmit={handleFormSubmit} />
      {idCardData && <IDCard data={idCardData} />}
    </div>
  );
};

export default App;
