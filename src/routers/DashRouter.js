import { Navbar } from "../components/ui/NavBar";

import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Route, Routes } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MarvelScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />
        </Routes>
      </div>
    </>
  );
};
