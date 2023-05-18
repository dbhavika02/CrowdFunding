import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import Sidebar from "./components/Sidebar";
import Naavbar from "./components/Naavbar";

const App = () => {
  return (
    <div className="realative sm:-8 p-4 bg-[#13131a] min-h-screen flex felx-row">
      <div className="sm:flex hidden mr-10 relative ">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full text-white	 max-w-[1280px] mx-auto sm:pr-5 ">
        <Naavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
