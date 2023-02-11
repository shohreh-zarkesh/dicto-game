import {Route, Routes} from "react-router-dom";
import {LoginScreen} from "./screens/Login";
import {SignUpScreen} from "./screens/SignUp";
import React from "react";

export function AuthScreens() {
    return (
        <Routes>
            <Route exact path="/auth" element={<LoginScreen/>}/>;
            <Route path="/auth/login" element={<LoginScreen/>}/>;
            <Route path="/auth/signUp" element={<SignUpScreen/>}/>
        </Routes>
    )
}