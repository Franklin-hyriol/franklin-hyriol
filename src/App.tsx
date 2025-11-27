import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { LenisContext } from "./context/LenisContext";

const Home = lazy(() => import("./pages/Home"));
const PrayTogetherPage = lazy(
  () => import("./pages/ProjectDetail/PrayTogetherPage")
);
const EyeChallengePage = lazy(
  () => import("./pages/ProjectDetail/EyeChallengePage")
);
const IntervalTimerPage = lazy(
  () => import("./pages/ProjectDetail/IntervalTimerPage")
);
const GreengascarPage = lazy(
  () => import("./pages/ProjectDetail/GreengascarPage")
);
const ContactRavinalaPage = lazy(
  () => import("./pages/ProjectDetail/ContactRavinalaPage")
);
const PlottrackingPage = lazy(
  () => import("./pages/ProjectDetail/PlottrackingPage")
);
const VerletJsPage = lazy(() => import("./pages/ProjectDetail/VerletJsPage"));
const SolitairePage = lazy(() => import("./pages/ProjectDetail/SolitairePage"));
const NftMarketplacePage = lazy(
  () => import("./pages/ProjectDetail/NftMarketplacePage")
);

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any);

    setLenis(lenisInstance);

    function raf(time: DOMHighResTimeStamp) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/pray-together" element={<PrayTogetherPage />} />
          <Route path="/project/eye-challenge" element={<EyeChallengePage />} />
          <Route
            path="/project/interval-timer"
            element={<IntervalTimerPage />}
          />
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
      </Suspense>
      <Footer />
    </LenisContext.Provider>
  );
}

export default App;
