import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ChooseRegion } from "./components/choose-region/ChooseRegion";
import { Region } from "./components/region/Region";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Organizations } from "./components/organizations/Organizations";
import { ContextProvider } from "./context-api/upload-context";
import { Contact } from "./components/contact/Contact";
import { useEffect, useState } from "react";
import { Preload } from "./components/Preload/Preload";

function App() {
  const [firstFlowAni, setFirstFlowAni] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("firstFlowAnimation")) {
      setFirstFlowAni(false);
    } else {
      setFirstFlowAni(true);
      setTimeout(() => {
        setFirstFlowAni(false);
        localStorage.setItem("firstFlowAnimation", "false");
      }, 7000);
    }
  }, []);
  return (
    <>
      {firstFlowAni ? (
        <Preload />
      ) : (
        <ContextProvider>
          <div className="App">
            <Routes>
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/map" element={<ChooseRegion />} />
              <Route path="/about" element={<About />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/map/:regionId" element={<Region />} />
            </Routes>
          </div>
        </ContextProvider>
      )}
    </>
  );
}

export default App;
