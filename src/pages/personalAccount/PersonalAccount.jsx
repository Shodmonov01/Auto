import { Route, Routes } from "react-router-dom";
import Aside from "../../components/personalAccountAside/Aside";
import SavedCards from "./savedCards/SavedCards";
import Messages from "./messages/Messages";
import PlaceAd from "./PlaceAd/PlaceAd";
import Tariff from "./tariff/Tariff";
import AccauntSettings from "./accauntSettings/AccauntSettings";

const PersonalAccount = () => {
  return (
    <div className="flex-class">
      <Aside />
      <div className="routes">
        <Routes>
          <Route path="/savedCards" element={<SavedCards />} />
          <Route path="message" element={<Messages />} />
          <Route path="placeAd" element={<PlaceAd />} />
          <Route path="tariff" element={<Tariff />} />
          <Route path="accauntSettings" element={<AccauntSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default PersonalAccount;
