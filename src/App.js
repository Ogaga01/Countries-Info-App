import { Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
