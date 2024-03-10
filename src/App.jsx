import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DmcaPage from "./pages/DmcaPage";
import Games from "./pages/Games";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Tutorial from "./pages/Tutorials";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutoriel" element={<Tutorial />} />
        <Route path="/dmca" element={<DmcaPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/jeux" element={<Games />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
