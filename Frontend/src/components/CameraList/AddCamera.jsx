import React, { useState } from 'react'

const AddCamera = () => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [images, setImages] = useState([]); // Added images state

  // Function to handle input change for date
  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // Function to handle input change for start time
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  // Function to handle input change for end time
  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted");
  };

  return (
    <div>
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Half */}
      <div>
      <div className="flex-1 flex items-center justify-center p-8">
        {/* Camera Feed Container */}
        <div className="w-3/5 h-96 border-r border-gray-300 bg-black">
          {/* Black screen placeholder */}
        </div>
        {/* Sidebar for Date and Time Input */}
        <div className="w-1/3 p-4 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-4 text-center">Select Date and Time</h2>
          {/* Date Input */}
          <div className="mb-2">
            <label className="block font-medium mb-2">Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={handleDateChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* Start Time Input */}
          <div className="mb-2">
            <label className="block font-medium mb-2">Start Time:</label>
            <input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* End Time Input */}
          <div className="mb-4">
            <label className="block font-medium mb-2">End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* Submit Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      </div>
      {/* Divider */}
      {/* <div className="flex items-center justify-center">
        <div className="border-t border-gray-300 w-full text-center mt-4 mb-4">
          <span className="bg-white px-4 text-lg font-semibold text-gray-700">AI Search</span>
        </div>
      </div> */}
      {/* Bottom Half */}
      <div className="flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-2xl font-bold text-center mt-4">Search Items</h1>
      <div className="w-2/3 bg-white rounded-lg p-6 m-16">
        <h3>Upload Images:</h3>
        <div className="flex flex-wrap -mx-2 mb-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-24 h-24 mx-2 mb-2">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="w-full h-full object-cover rounded"
              />
              <button
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                onClick={() => handleRemoveImage(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 10a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v4zm-2-7a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <label
          htmlFor="uploadImages"
          className="bg-white text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif] m-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 mb-6 fill-gray-400"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
            />
            <path
              d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
            />
          </svg>
          <p className="text-gray-400 font-semibold text-sm">
            Drag & Drop or{' '}
            <span className="text-[#007bff]">Choose file</span> to upload
          </p>
          <input
            type="file"
            id="uploadImages"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <p className="text-xs text-gray-400 mt-2">
            PNG, JPG SVG, WEBP, and GIF are Allowed.
          </p>
        </label>
        <label htmlFor="vehicleno" className="block font-medium mb-2">License Plate Number:</label>
        <div className="flex justify-center items-center">
          <input
          id="vehicleno"
          type="text"
          className="w-96 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-center"
          // value={projectTitle}
          // onChange={handleProjectTitleChange}
          />
          </div>
          <div className="flex justify-center mt-8">
              <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center"
              onClick={handleSubmit}
              >
              Submit
              </button>
          </div>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white px-32 pb-32">
      <h1 className="text-2xl font-bold text-center mt-4">Items Detected</h1>
      <table className="border-collapse w-full m-8">
          <thead>
              <tr>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Time Stamp</th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Detection</th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Time Stamp</span>
                      2024-04-17 15:30:45
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Detection</span>
                      Fire
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                      <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                      <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                      <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                  </td>
              </tr>
              <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                      2024-01-17 15:30:45
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                      Crowd
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                      <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">resolved</span>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                      <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                      <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                  </td>
              </tr>
              <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                      2024-04-17 15:40:15
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                      Knife
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                      <span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">unresolved</span>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                      <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                      <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
    </div>
  </div>
  )
}

export default AddCamera