import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { WelcomePage, CommunitiesPage, FactoriesPage, TestPage } from "./pages";
import { Navbar, Footer } from "./components";
import License from "./License";

import "./App.module.scss";

export default function App() {
  return (
    <>
      <License />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/factories" element={<FactoriesPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
