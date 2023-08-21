import { Suspense, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import OurCoffee from "../pages/OurCoffee";
import Header from "../Header";
import Footer from "../Footer";


const Router: FC = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={""}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
