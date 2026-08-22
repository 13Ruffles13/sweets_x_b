import { AppRoutes } from "./Routes/AppRoutes";
import "./App.css";
import { HashRouter } from "react-router";

export function App() {
  return (
    <div className="mainContainer">
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </div>
  );
}
