import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "../pages/layout/sidebar";
import BillingPage from "../pages/billing/mainBilling";
import UnderDevelopment from "../utils/underDevelopment";

function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/underdev" element={<UnderDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PrivateRoutes;