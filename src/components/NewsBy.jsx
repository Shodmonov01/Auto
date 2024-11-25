import React, { useState, useEffect } from "react";
import axiosConfig from "../config/axiosConfig";
import { useParams, useNavigate, Link } from "react-router-dom";
import StillSelecting from "./StillSelecting";
import { IoIosArrowForward } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import Loader from "../utils/Loader";

const NewsBy = () => {
  const [news, setNews] = useState(null);
  const [newsBy, setNewsBy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        const response = await axiosConfig.get(`/news/${id}`);
        setNews(response.data);
      } catch (err) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };
    fetchNewsById();
  }, [id]);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const response = await axiosConfig.get("/news");
        setNewsBy(response.data);
      } catch (err) {
        setError("Error fetching news list");
      }
    };
    fetchAllNews();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  const relatedNews = newsBy
    .filter((article) => article.id !== news.id)
    .slice(-3);

  return (
    <>
      <div className="p-2 m-2 sm:p-4 sm:m-4 lg:mx-[72px] lg:my-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[26px] font-bold mb-3 text-gray-900">
          {news.title}
        </h2>
        <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1">
          <ul className="space-y-6 col-span-2">
            <li key={news.id}>
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-auto xs:w-[350px] md:w-[600px] lg:w-[857px] lg:h-[383px] rounded-[15px] object-cover"
              />
              <div className="py-6">
                <p className="text-[#989898] text-[14px] xs:text-sm sm:text-base md:text-lg mb-4">
                  {news.content}
                </p>
              </div>
            </li>
          </ul>

          <div className="p-2 w-[350px] lg:w-[414px] text-[20px] col-span-1 rounded-[15px] border shadow-lg h-[383px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[26px] font-bold mb-3 text-gray-900">
              Читайте другие статьи <br />в нашем блоге:
            </h2>
            <div className="space-y-2 w-full">
              {relatedNews.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between border-b pb-2 pt-4 px-4 cursor-pointer"
                  onClick={() => navigate(`/news/${article.id}`)}
                >
                  <span className="flex-1 text-left text-[#5A5A5A] hover:underline">
                    {article.title}
                  </span>
                  <IoIosArrowForward className="flex-none" />
                </div>
              ))}
              <div className="flex items-center cursor-pointer hover:underline justify-start pt-6">
                <Link to={"/newspage"} className="text-[#202020] px-4">
                  Читать больше новостей
                </Link>
                <BsArrowUpRight className="flex-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <StillSelecting />
    </>
  );
};

export default NewsBy;
