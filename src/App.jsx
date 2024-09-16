<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PersonalAccount from "./pages/personalAccount/PersonalAccount";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* PersonalAccount sahifasi va uning ichki yo'nalishlari uchun /* belgilang */}
          <Route path="/*" element={<PersonalAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
=======
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainPage from "./pages/mainPage";
import AboutCarsPage from "./pages/AboutCarsPage";
import CarDetails from "./components/CarDetails";
import { AutoCarsProvider } from "./components/AutoCarsContext";

function App() {
  return (
    <AutoCarsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about-cars" element={<AboutCarsPage />} />
              <Route path="/about-cars/:id" element={<CarDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AutoCarsProvider>
>>>>>>> becc9b1fcaeb035f80a29f979ee9a620a2c47b3c
  );
}

export default App;
