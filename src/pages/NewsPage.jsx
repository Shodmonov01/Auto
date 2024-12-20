import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/Context/LanguageContext";
import axiosInstance from "../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";

const NewsPage = () => {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [expandedStates, setExpandedStates] = useState({});

  const translations = {
    ru: { news: "Новости", readMore: "Подробнее", showLess: "Скрыть" },
    uzb: { news: "Yangiliklar", readMore: "Batafsil", showLess: "Yopish" },
    en: { news: "News", readMore: "Read More", showLess: "Show Less" },
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/news");
        setNews(response.data);
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

  const HandleScroll = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

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
    return <Loader />;
  }

  return (
    <div className="m-2 lg:mx-[72px]">
      <div>
        <b className="text-2xl">{translations[language].news}</b>
      </div>
      <br />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg border rounded-lg p-4"
          >
            <Link to={`/news/${item.id}`}>
              <img
                src={item.image}
                alt="News"
                className="w-full h-[280px] object-cover mb-4 rounded-lg"
              />
            </Link>
            <b className="text-xl mb-2 block">{item.title}</b>
            <p className="mb-4">
              {expandedStates[item.id]
                ? item.content
                : truncateText(item.content, 90)}
            </p>
            <div className="flex items-center gap-4">
              <button onClick={() => HandleScroll(`/news/${item.id}`)}>
                <Link
                  className="text-[#293843] hover:text-black"
                  to={`/news/${item.id}`}
                >
                  <u>{translations[language].readMore}</u>
                </Link>
              </button>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
