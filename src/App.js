import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Recommend from "./pages/Recommend";
import Modify from "./pages/Modify";
import { useEffect, useState } from "react";
import Stat from "./pages/Stat";
import Instruction from "./pages/Instruction";
import Search from "./pages/Search";
import {
  RecoilRoot,
  atom,
  selector,
  iserRecoilState,
  userRecoilValue,
} from "recoil";
export const tokenState = atom({
  key: "token",
  default: '',
});
function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/stat" element={<Stat />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/recommend" element={<Recommend />} />
          <Route exact path="/modify" element={<Modify />} />
          <Route exact path="/instruction" element={<Instruction />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}
export default App;
