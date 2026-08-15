import { RoutePaths } from "./Routes/routes";
import "./App.css";
import { HashRouter } from "react-router";

export function App() {
  return (
    <>
      <div className="mainContainer">
        <HashRouter>
          <RoutePaths />
        </HashRouter>
      </div>
    </>
  );
}
