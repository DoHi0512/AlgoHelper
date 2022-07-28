import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
