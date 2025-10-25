import MainHomeRoute from "./Home/MainHomeRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function RoutePaths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sweets_x_b" element={<MainHomeRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutePaths;
