import React from "react";
import { Routes, Route } from "react-router";
import UserList from "../pages/User";
import ProductList from "../pages/Product";
import Home from "../pages/Home";
import ProtectedRouting from "../components/ProtectRouting";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* Users Route */}
            <Route element={<ProtectedRouting allowedRole={["users"]} />}>
                <Route path="/users" element={<UserList />} />
            </Route>

            {/* Products Route */}
            <Route element={<ProtectedRouting allowedRole={["products"]} />}>
                <Route path="/products" element={<ProductList />} />
            </Route>
        </Routes>
    );
};

export default Navigation;