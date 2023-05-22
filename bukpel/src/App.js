import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./navbar/Nav";
import Home from "./components/Home";
import Main from "./components/Main";
import DetailUser from "./components/DetailUser";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Nav/>} >
                <Route index element={<Home/>} ></Route>
                <Route path="pelanggan" element={<Main/>} ></Route>
                <Route path="pelanggan/:id" element={<DetailUser />}></Route>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
