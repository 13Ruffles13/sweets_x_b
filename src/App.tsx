import RoutePaths from "./Routes/routes";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden px-[env(safe-area-inset)]">
        <RoutePaths />
      </div>
    </>
  );
}

export default App;
