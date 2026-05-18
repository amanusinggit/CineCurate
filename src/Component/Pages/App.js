import { Outlet } from "react-router";
import Header from "../Header/Header";

function App() {
  return (
    <div className="bg-void min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
