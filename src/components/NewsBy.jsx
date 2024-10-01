import React, { useState, useEffect } from "react";
import axiosConfig from "../axiosConfig";

const NewsBy = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosConfig.get("/news");
        setNews(response.data);
      } catch (err) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
        Latest News
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <li
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
              <button className="text-indigo-600 hover:text-indigo-400 font-semibold">
                Read More
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsBy;
