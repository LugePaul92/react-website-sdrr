import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { JuuYetu } from "../pages/JuuYetu";
import { KanuniZaMsingi } from "../pages/KanuniZaMsingi";
import { Matoleo } from "../pages/Matoleo";
import { Vitabu } from "../pages/Vitabu";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juu-yetu" element={<JuuYetu />} />
        <Route path="/kanuni-za-misingi" element={<KanuniZaMsingi />} />
        <Route path="/vitabu" element={<Vitabu />} />
        <Route path="/matoleo" element={<Matoleo />} />
      </Routes>
    </BrowserRouter>
  );
};
