import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home/Home.Component";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

