import { Route, Routes } from "react-router";
import { CustomerOrders } from "./CustomerOrders/CustomerOrdersRoute";
import { MainHomeRoute } from "./Home/MainHomeRoute";

export function RoutePaths() {
  return (
    <Routes>
      <Route path="/" element={<MainHomeRoute />}></Route>
      <Route path="/orders" element={<CustomerOrders />}></Route>
    </Routes>
  );
}
