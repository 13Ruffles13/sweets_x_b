import { HashRouter } from "react-router";
import { AppRoutes } from "./Routes/AppRoutes";
import "./App.css";

export function App() {
  return (
    <HashRouter>
      <div className="mainContainer">
        <AppRoutes />
      </div>
    </HashRouter>
  );
}
