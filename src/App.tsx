import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import OrderStatus from "./pages/OrderStatus";
import Checkout from "./pages/Checkout";
import KitchenDashboard from "./pages/KitchenDashboard ";
import PendingOrder from "./components/PendingOrder";
import CompletedOrder from "./components/CompletedOrder";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderStatus" element={<OrderStatus />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/kitchendashboard" element={<KitchenDashboard />}>
          <Route index element={<PendingOrder />} />
          <Route path="pendingorder" element={<PendingOrder />} />
          <Route path="completedorder" element={<CompletedOrder />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
