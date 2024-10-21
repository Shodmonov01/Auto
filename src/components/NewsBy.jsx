import React, { useState, useEffect } from "react";
import axiosConfig from "../axiosConfig";
import { useParams } from "react-router-dom";
import StillSelecting from "./StillSelecting";

const NewsBy = () => {
  const [newsBy, setNewsBy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosConfig.get(`/news/${id}`);
        setNewsBy(response.data);
      } catch (err) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchNews();
    }, 2000);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="p-2 m-2 sm:p-4 sm:m-4 lg:mx-[72px] lg:my-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[26px] font-bold mb-3 text-gray-900">
          {newsBy.title}
        </h2>
        <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1">
          <ul className="space-y-6 col-span-2">
            <li key={newsBy.id}>
              <img
                src={newsBy.image}
                alt={newsBy.title}
                className="w-full max-w-full h-auto sm:h-[300px] md:h-[350px lg:w-[857px] lg:h-[383px] rounded-[15px] object-cover"
              />
              <div className="py-6">
                <p className="text-[#989898] text-[16px] sm:text-base md:text-lg mb-4">
                  {newsBy.content}
                </p>
              </div>
            </li>
          </ul>
          <div className="p-2 text-[20px] col-span-1 rounded-[15px] border shadow-lg h-[383px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[26px] font-bold mb-3 text-gray-900">
              Читайте другие статьи <br />в нашем блоге:
            </h2>
            
          </div>
        </div>
      </div>
      <StillSelecting />
    </>
  );
};

export default NewsBy;
