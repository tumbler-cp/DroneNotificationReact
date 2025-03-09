import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Goods from "./sender/pages/Goods";

function App() {
  return (
    <div className="flex flex-col text-xl">
      <NavBar />
      <div className="flex">
        <Routes>
          <Route path="*" element={<Goods />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
