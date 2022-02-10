import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bracelets from "../Components/Pages/Bracelets/Bracelets.Component";
import Home from "../Components/Pages/Home/Home.Component";
// import Rings from "../Components/Pages/Rings/Rings.Component";
import Watches from "../Components/Pages/Watches/Watches.Component";
import Footer from "../Components/Parts/Footer/Footer.Component";
import Header from "../Components/Parts/Header/Header.Component";
import NavBar from "../Components/Parts/NavBar/NavBar.Component";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
<div className="videoDiv">
</div>
        <div className="RenderedContent">
          {/* This is Main Content. */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Bracelets" element={<Bracelets />} />
            {/* <Route  path="/Rings" element={<Rings/>} /> */}
            <Route path="/Watches" element={<Watches />} />
{/* This is Main Content. */}

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
