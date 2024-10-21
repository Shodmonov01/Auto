import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "./Context/LanguageContext";
import axiosInstance from "../axiosConfig";

const News = () => {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedStates, setExpandedStates] = useState({}); // Track expanded states for each news item

  const translations = {
    ru: {
      news: "Новости",
      readMore: "Подробнее",
      showLess: "Скрыть",
    },
    uzb: {
      news: "Yangiliklar",
      readMore: "Batafsil",
      showLess: "Yopish",
    },
    en: {
      news: "News",
      readMore: "Read More",
      showLess: "Show Less",
    },
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/news");
        console.log(response.data);
        setNews(response.data.slice(-3));
        const initialStates = response.data.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {});
        setExpandedStates(initialStates);
      } catch (err) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">Loading news...</p>
      </div>
    );
  }

  return (
    <>
      <div className="m-2 lg:mx-[72px]">
        <div>
          <b className="text-2xl">{translations[language].news}</b>
        </div>
        <br />
        <div className="relative flex justify-center items-center">
          <div className="relative flex flex-row gap-[15px] overflow-x-auto">
            {news.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 bg-white shadow-lg border rounded-lg p-4 w-[290px] lg:w-[416px]"
              >
                <img
                  src={item.image}
                  alt="imageFamily"
                  className="w-full h-[280px] object-cover mb-4 rounded-lg"
                />
                <b className="text-xl mb-2 block">{item.title}</b>
                <p className="mb-4">
                  {expandedStates[item.id]
                    ? item.content
                    : truncateText(item.content, 90)}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    className="text-[#293843] hover:text-black"
                    to={`/news/${item.id}`}
                  >
                    <u>{translations[language].readMore}</u>
                  </Link>
                  <FaArrowRightLong />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
