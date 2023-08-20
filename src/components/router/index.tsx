import { Suspense, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Header from "../Header";

const Router: FC = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={"dfw"}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
