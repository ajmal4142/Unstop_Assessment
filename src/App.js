import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainSection from "./Component/MainSection";
import SideBar from "./Component/SideBar";
import EmptyFiles from "./Component/EmptyFiles";

function App() {
  return (
    <div className="App d-flex">
      <SideBar />
      <div style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/assessment" element={<EmptyFiles />} />
          <Route path="/dashboard" element={<EmptyFiles />} />
          <Route path="/library" element={<EmptyFiles />} />
          <Route path="/status" element={<EmptyFiles />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
