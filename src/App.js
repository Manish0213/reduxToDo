// import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </>
    </Routes>
    </Router>
  );
}

export default App;
