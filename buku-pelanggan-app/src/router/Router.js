import React from "react";
import {BrowseRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";

const Router = () => {
    return(
        <div>
            <BrowseRouter>
            <Routes>
                <Route path='/' element={<App/>} >
                </Route>
            </Routes>
            </BrowseRouter>
        </div>
    )
}

export default Router;