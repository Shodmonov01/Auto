import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null; // This component doesn't render anything, in order to change title name.
};

export default PageTitle;
