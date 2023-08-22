import { Suspense, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import OurCoffeePage from "../pages/OurCoffeePage";
import ForYourPleasurePage from "../pages/ForYourPleasurePage";
import Header from "../Header";
import Footer from "../Footer";


const Router: FC = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={""}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-coffee" element={<OurCoffeePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasurePage/>} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
