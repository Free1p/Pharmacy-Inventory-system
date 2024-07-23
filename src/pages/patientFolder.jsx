import React, { useState } from 'react';

const patientFolder = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    folderFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4 sm:w-3/4 w-full mt-10">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload Patient Folder</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="patientName" className="block font-medium">Patient Name:</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="folderFile" className="block font-medium">Upload Patient Folder:</label>
              <input
                type="file"
                id="folderFile"
                name="folderFile"
                accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
                onChange={handleChange}
                className="w-full border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <p className="text-sm text-gray-500 mt-1">Supported File type: .doc, .docx, .pdf, .jpg, .jpeg, .png</p>
            </div>
            <div>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default patientFolder;
