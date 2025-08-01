import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";

/*
 * Header
 *  - Logo
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search
 *  - RestaurantList
 *    - RestaurantCard
 *      - Image
 *      - Name
 *      - Rating
 *      - Cuisines
 * Footer
 *  - Links
 *  - Copyright
 *  - Address
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
