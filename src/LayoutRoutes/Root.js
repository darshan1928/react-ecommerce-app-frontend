import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "../components/Logout/Logout";
import ProductDetails from "../components/ProductDetails/ProductDetails";

function Root() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/product/:id" element={<ProductDetails/>}></Route>
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default Root;
