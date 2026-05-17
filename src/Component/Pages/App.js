import { Outlet } from "react-router";
import Header from "../Header/Header";

function App() {
  return (
    <div className="bg-void min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
