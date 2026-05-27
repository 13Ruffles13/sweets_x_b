import { HashRouter, Route, Routes } from "react-router-dom";
import { CustomerOrders } from "./CustomerOrders/CustomerOrdersRoute";
import { MainHomeRoute } from "./Home/MainHomeRoute";

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
