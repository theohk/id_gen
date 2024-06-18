import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const IDCardForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, designation, photo });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">ID Card Generator</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Photo:</label>
          <Dropzone onDrop={handleDrop} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="border-dashed border-2 p-4 text-center">
                <input {...getInputProps()} />
                <p>Drag 'n' drop a photo here, or click to select one</p>
              </div>
            )}
          </Dropzone>
          {photo && <img src={photo} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded-full" />}
        </div>
        <button type="submit" className="w-full px-3 py-2 bg-blue-500 text-white rounded">
          Generate ID Card
        </button>
      </form>
    </div>
  );
};

export default IDCardForm;
