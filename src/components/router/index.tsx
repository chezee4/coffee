import { Suspense, lazy, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Spinner from "../Spinner";
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const OurCoffeePage = lazy(() => import("../pages/OurCoffeePage"));
const ForYourPleasurePage = lazy(() => import("../pages/ForYourPleasurePage"));


const Router: FC = () => {
  return (
    <BrowserRouter basename="coffee">
      <Suspense fallback={<Spinner/>}>
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
