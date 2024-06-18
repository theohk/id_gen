import React from 'react';

const IDCard = ({ data }) => {
  return (
    <div className="max-w-md mx-auto mt-6 p-6 border rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">ID Card</h2>
      {data.photo && <img src={data.photo} alt={data.name} className="w-24 h-24 object-cover rounded-full mx-auto" />}
      <p className="mt-4 text-lg font-medium">Name: {data.name}</p>
      <p className="text-lg font-medium">Designation: {data.designation}</p>
    </div>
  );
};

export default IDCard;
