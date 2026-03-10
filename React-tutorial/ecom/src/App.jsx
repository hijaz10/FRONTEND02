import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/Logout" element={<h1>LOGOUT PAGE</h1>}></Route>
        <Route path="/Login" element={<h1>LOGIN PAGE</h1>}></Route>
        <Route path="/Login" element={<h1>LOGIN PAGE</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
