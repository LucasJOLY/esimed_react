import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route, BrowserRouter } from "react-router";
import NavBar from "./pages/NavBar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MuiThemeProvider from "./theme/MuiTheme";
import { ToastContainer } from "react-toastify";
import CourseList from "./features/courses/CourseList";
function App() {
  return (
    <Fragment>
      <ToastContainer />
      <MuiThemeProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
