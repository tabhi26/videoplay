import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [loader, setLoader] = useState(false);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login loader={loader} setLoader={setLoader} />}></Route>
        <Route exact path="/signup" element={<SignUp loader={loader} setLoader={setLoader} />}></Route>
        <Route exact path="/home" element={<Home loader={loader} setLoader={setLoader} />}></Route>
      </Routes>
    </>
  );
}

export default App;
