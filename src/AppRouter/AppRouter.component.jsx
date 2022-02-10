import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdmainForm from "../Components/Pages/AdminForm/AdminFrom.Componrnt";
import Bracelets from "../Components/Pages/Bracelets/Bracelets.Component";
import Home from "../Components/Pages/Home/Home.Component";
import Necklaces from "../Components/Pages/Necklaces/Necklaces.Component";
import UserForm from "../Components/Pages/UserForm/UserForm";
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
            <Route path="/UserFrom" element={<UserForm />} />
            <Route path="/AdminForm" element={<AdmainForm />} />
            <Route path="/Necklaces" element={<Necklaces />} />


{/* This is Main Content. */}

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
