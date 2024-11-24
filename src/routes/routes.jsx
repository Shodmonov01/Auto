import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPage from "../pages/MainPage";
import CarDetails from "../components/Automobile/CarDetails";
import PageTitle from "../components/PageTitle";
import NotFoundPage from "../pages/NotFoundPage";
import AboutCarsCatalog from "../components/Automobile/AboutCarsCatalog";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPassowrdPage";
import Contact from "../components/Contact";
import CommerceCar from "../components/CommerceCar/CommerceCar";
import CommerceCarDetails from "../components/CommerceCar/CommerceCarDetails";
import Motorcycles from "../components/Motorcycles/Motorcycle";
import MotorcycleDetails from "../components/Motorcycles/MotorcycleDetails";
import Profile from "../components/Profile/Profile";
import Update from "../components/Profile/Update";
import News from "../components/News";
import NewsBy from "../components/NewsBy";
import PersonalMessage from "../components/Profile/PersonalMessage";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto flex-grow">
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-[1440px]">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <PageTitle title="AutoSite" />
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/about-cars",
    element: (
      <Layout>
        <PageTitle title="About Cars" />
        <AboutCarsCatalog />
      </Layout>
    ),
  },
  {
    path: "/about-cars/:id",
    element: (
      <Layout>
        <PageTitle title="Car Details" />
        <CarDetails />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <PageTitle title="Register" />
        <RegisterPage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <PageTitle title="Login" />
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Layout>
        <PageTitle title="Forgot Password" />
        <ForgetPasswordPage />
      </Layout>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Layout>
        <PageTitle title="Reset Password" />
        <ResetPasswordPage />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <PageTitle title="Contact" />
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/commerce-cars",
    element: (
      <Layout>
        <PageTitle title="Commerce Cars" />
        <CommerceCar />
      </Layout>
    ),
  },
  {
    path: "/commerce-cars/:id",
    element: (
      <Layout>
        <PageTitle title="Car Details" />
        <CommerceCarDetails />
      </Layout>
    ),
  },
  {
    path: "/motorcycles",
    element: (
      <Layout>
        <PageTitle title="Motorcycles" />
        <Motorcycles />
      </Layout>
    ),
  },
  {
    path: "/motorcycles/:id",
    element: (
      <Layout>
        <PageTitle title="Motorcycle Details" />
        <MotorcycleDetails />
      </Layout>
    ),
  },
  {
    path: "/profile/*",
    element: (
      <Layout>
        <PageTitle title="Profile" />
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/update/*",
    element: (
      <Layout>
        <PageTitle title="Update" />
        <Update />
      </Layout>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout>
        <PageTitle title="News" />
        <News />
      </Layout>
    ),
  },
  {
    path: "/newspage",
    element: (
      <Layout>
        <PageTitle title="News Page" />
        <NewsPage />
      </Layout>
    ),
  },
  {
    path: "/news/:id",
    element: (
      <Layout>
        <PageTitle title="News" />
        <NewsBy />
      </Layout>
    ),
  },
  {
    path: "/message",
    element: (
      <Layout>
        <PageTitle title="Message" />
        <PersonalMessage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <PageTitle title="404 | Page Not Found" />
        <NotFoundPage />
      </Layout>
    ),
  },
]);
