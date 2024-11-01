import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import CarDetails from "./components/Automobile/CarDetails";
import PageTitle from "./components/PageTitle";
import NotFoundPage from "./pages/NotFoundPage";
import AboutCarsCatalog from "./components/Automobile/AboutCarsCatalog";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPassowrdPage from "./pages/ResetPassowrdPage";
import Contact from "./components/Contact";
import CommerceCar from "./components/CommerceCar/CommerceCar";
import CommerceCarDetails from "./components/CommerceCar/CommerceCarDetails";
import Motorcycles from "./components/Motorcycles/Motorcycle";
import MotorcycleDetails from "./components/Motorcycles/MotorcycleDetails";
import Profile from "./components/Profile/Profile";
import Update from "./components/Profile/Update";
import News from "./components/News";
import NewsBy from "./components/NewsBy";
import PersonalMessage from "./components/Profile/PersonalMessage";
import { LanguageProvider } from "./components/Context/LanguageContext";
import { UserProvider } from "./components/Context/UserContext";
import DeleteCar from "./components/Profile/deleteCar";

function Layout({ children }) {
  const location = useLocation();
  const isNotFound = location.pathname === "/404" || location.pathname === "*";

  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto">
      {!isNotFound && <Header />}
      <div className="w-full max-w-[1440px] mx-auto flex-grow">
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-[1440px]">{children}</div>
        </div>
      </div>
      {!isNotFound && <Footer />}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <PageTitle title="AutoSite" />
                    <MainPage />
                  </>
                }
              />
              <Route
                path="/about-cars"
                element={
                  <>
                    <PageTitle title="About Cars" />
                    <AboutCarsCatalog />
                  </>
                }
              />
              <Route
                path="/about-cars/:id"
                element={
                  <>
                    <PageTitle title="Car Details" />
                    <CarDetails />
                  </>
                }
              />
              {/* Nested route for PersonalAccount */}
              <Route
                path="/register"
                element={
                  <>
                    <PageTitle title="Register" />
                    <RegisterPage />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <PageTitle title="Login" />
                    <LoginPage />
                  </>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <>
                    <PageTitle title="forgot-password" />
                    <ForgetPasswordPage />
                  </>
                }
              />
              <Route
                path="/reset-password"
                element={
                  <>
                    <PageTitle title="reset-password" />
                    <ResetPassowrdPage />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <PageTitle title="contact" />
                    <Contact />
                  </>
                }
              />
              <Route
                path="/commerce-cars"
                element={
                  <>
                    <PageTitle title="Commerce-cars" />
                    <CommerceCar />
                  </>
                }
              />
              <Route
                path="/commerce-cars/:id"
                element={
                  <>
                    <PageTitle title="Car Details" />
                    <CommerceCarDetails />
                  </>
                }
              />
              <Route
                path="/motorcycles"
                element={
                  <>
                    <PageTitle title="motocycles" />
                    <Motorcycles />
                  </>
                }
              />
              <Route
                path="/motorcycles/:id"
                element={
                  <>
                    <PageTitle title="motocycles" />
                    <MotorcycleDetails />
                  </>
                }
              />
              <Route
                path="/profile/*"
                element={
                  <>
                    <PageTitle title="profile" />
                    <Profile />
                  </>
                }
              />
              <Route
                path="/update/*"
                element={
                  <>
                    <PageTitle title="update" />
                    <Update />
                  </>
                }
              />
              <Route
                path="/news"
                element={
                  <>
                    <PageTitle title="news" />
                    <News />
                  </>
                }
              />
              <Route
                path="/news/:id"
                element={
                  <>
                    <PageTitle title="news" />
                    <NewsBy />
                  </>
                }
              />
              <Route
                path="/message"
                element={
                  <>
                    <PageTitle title="message" />
                    <PersonalMessage />
                  </>
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <PageTitle title="404 | Page Not Found" />
                    <NotFoundPage />
                  </>
                }
              />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </UserProvider>
  );
}

export default App;
