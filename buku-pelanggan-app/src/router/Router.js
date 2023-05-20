import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import DetailUser from "../users/DetailUser";

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>} >
                    </Route>
                    <Route path="pelanggan/:id" element={<DetailUser/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;