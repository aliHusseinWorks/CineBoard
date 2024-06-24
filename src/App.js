import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Trending, Movies, TV, Search, Error } from "./pages";
import { Header, Footer, Loading } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Loading /> {/* App loader */}
      <Header />
      <Routes>
        <Route path="/" element={<Trending />} exact />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
