import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bracelets from "../Components/Pages/Bracelets/Bracelets.Component";
import Home from "../Components/Pages/Home/Home.Component";
import Necklaces from "../Components/Pages/Necklaces/Necklaces.Component";
import Rings from "../Components/Pages/Rings/Rings.Component";
import Watches from "../Components/Pages/Watches/Watches.Component";
import NavBar from "../Components/Parts/NavBar/NavBar.Component";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/Bracelets" element={<Bracelets/>} />
          <Route  path="/Rings" element={<Rings/>} />
          <Route  path="/Watches" element={<Watches/>} />
          <Route  path="/Necklaces" element={<Necklaces/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

