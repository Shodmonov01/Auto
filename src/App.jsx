import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./page/MainPage";
import AboutCarsPage from "./page/AboutCarPage"
import CarDetails from "./components/CarDetails";
import { AutoCarsProvider } from "./components/AboutCarsContext";
import PageTitle from "./components/PageTitle";
import NotFoundPage from "./page/NotFoundPage";

function Layout({ children }) {
  const location = useLocation();
  const isNotFound = location.pathname === "/404" || location.pathname === "*";

  return (
    <div className="flex flex-col min-h-screen">
      {!isNotFound && <Header />}
      <div className="w-full max-w-[1440px] mx-auto flex-grow">
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-[1440px]">{children}</div>
          <div>something has changed</div>
        </div>
      </div>
      {!isNotFound && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AutoCarsProvider>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PageTitle title="Home" />
                  <MainPage />
                </>
              }
            />
            <Route
              path="/about-cars"
              element={
                <>
                  <PageTitle title="About Cars" />
                  <AboutCarsPage />
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
    </AutoCarsProvider>
  );
}

export default App;
