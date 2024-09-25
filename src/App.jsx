import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./page/MainPage";
import CarDetails from "./components/CarDetails";
import PageTitle from "./components/PageTitle";
import NotFoundPage from "./page/NotFoundPage";
import AboutCarsCatalog from "./components/AboutCarsCatalog";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import ForgetPasswordPage from "./page/ForgetPasswordPage";
import ResetPassowrdPage from "./page/ResetPassowrdPage";
import Contact from "./components/Contact";

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
  );
}

export default App;
