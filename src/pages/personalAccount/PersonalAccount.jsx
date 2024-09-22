const PersonalAccount = () => {
  
  return (
    <div className="flex-class">
      <Aside />
      <div className="routes">
        <Routes>
          <Route path="savedCards" element={<SavedCards />} />
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
