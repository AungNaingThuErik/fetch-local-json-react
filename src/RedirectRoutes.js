import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from "./pages/home";
import Movies from "./pages/movies";
import Series from "./pages/series";
import ErrorPage from "./pages/ErrorPage";
export default class RedirectRoutes extends Component {
    render() {
        return (
            <Router>
                {/* <Link to="/"> Home </Link>
                <Link to="/movies"> Movies </Link>
                <Link to="/series"> Series </Link> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        )
    }
}