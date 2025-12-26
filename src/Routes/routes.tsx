import { MainHomeRoute } from "./Home/MainHomeRoute";
import { CustomerOrders } from "./CustomerOrders/CustomerOrdersRoute";
import { HashRouter, Route, Routes } from "react-router-dom";

export function RoutePaths() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainHomeRoute />}></Route>
        <Route path="/orders" element={<CustomerOrders />}></Route>
      </Routes>
    </HashRouter>
  );
}
