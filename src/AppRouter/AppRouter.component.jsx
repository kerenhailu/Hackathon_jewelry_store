import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";

const AppRouter = () => {
  return (
    <div>
      <h1>AppRouter</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
