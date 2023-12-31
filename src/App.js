import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/MainPage/Main";
import CountryDetail from "./components/CountryPage/CountryDetail";
import FestivalDetail from "./components/DetailPage/FestivalDetail";
import SearchList from "./components/SearchPage/SearchList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CountryDetail" element={<CountryDetail />} />
        <Route path="/festival_detail/:id" element={<FestivalDetail />} />
        <Route path="/searchList" element={<SearchList />} />
      </Routes>
    </Router>
  );
}

export default App;
