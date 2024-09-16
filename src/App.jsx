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
  );
}

export default App;
