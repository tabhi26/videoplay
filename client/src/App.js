import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UploadVideo from "./components/UploadVideo";
import SignUp from "./components/SignUp";


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/uploadVideo" element={<UploadVideo/>}></Route>
    </Routes>
    </>
  );
}

export default App;
