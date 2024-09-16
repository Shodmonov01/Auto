import React, { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload
  const handleUpload = (event) => {
    event.preventDefault();
    alert("Image uploaded successfully!");
  };

  // Handle image deletion
  const handleDelete = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="p-6 bg-gradient-to-b from-blue-200 to-indigo-300 rounded-lg shadow-xl max-w-md mx-auto mt-10 transition-all duration-500 hover:scale-105">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
        Upload an Image
      </h2>
      <form
        onSubmit={handleUpload}
        className="flex flex-col gap-4 items-center"
      >
        <label className="cursor-pointer bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {preview && (
          <div className="mt-4 flex flex-col items-center">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300"
            />
            <button
              type="button"
              onClick={handleDelete}
              className="mt-2 bg-red-500 text-white py-1 px-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
            >
              Delete Image
            </button>
          </div>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transform transition-all duration-300 hover:scale-105"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;
