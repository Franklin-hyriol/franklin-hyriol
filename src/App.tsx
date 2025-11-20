import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrayTogetherPage from "./pages/ProjectDetail/PrayTogetherPage";
import EyeChallengePage from "./pages/ProjectDetail/EyeChallengePage";
import IntervalTimerPage from "./pages/ProjectDetail/IntervalTimerPage";
import GreengascarPage from "./pages/ProjectDetail/GreengascarPage";
import ContactRavinalaPage from "./pages/ProjectDetail/ContactRavinalaPage";
import PlottrackingPage from "./pages/ProjectDetail/PlottrackingPage";
import VerletJsPage from "./pages/ProjectDetail/VerletJsPage";
import SolitairePage from "./pages/ProjectDetail/SolitairePage";
import NftMarketplacePage from "./pages/ProjectDetail/NftMarketplacePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/pray-together" element={<PrayTogetherPage />} />
        <Route path="/project/eye-challenge" element={<EyeChallengePage />} />
        <Route path="/project/interval-timer" element={<IntervalTimerPage />} />
        <Route path="/project/greengascar" element={<GreengascarPage />} />
        <Route
          path="/project/contact-ravinala"
          element={<ContactRavinalaPage />}
        />
        <Route path="/project/plottracking" element={<PlottrackingPage />} />
        <Route path="/project/verlet-js" element={<VerletJsPage />} />
        <Route path="/project/solitaire" element={<SolitairePage />} />
        <Route
          path="/project/nft-marketplace"
          element={<NftMarketplacePage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
