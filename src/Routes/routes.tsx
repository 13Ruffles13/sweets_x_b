import MainHomeRoute from "./Home/MainHomeRoute";
import CustomerOrders from "./CustomerOrders/CustomerOrdersRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function RoutePaths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sweets_x_b" element={<MainHomeRoute />}></Route>
        <Route path="/sweets_x_b/orders" element={<CustomerOrders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutePaths;
