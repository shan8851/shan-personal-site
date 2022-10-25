import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { NowPage } from "./pages/Now";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/now" element={<NowPage />} />
    </Routes>
  );
};
