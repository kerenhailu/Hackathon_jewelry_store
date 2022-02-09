import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Pages/Home/Home.Component"
import NavBar from "./Components/Parts/NavBar/NavBar.Component";
// import NavBar from "./Components/Parts/NavBar/NavBar.Component";
// import AppRouter from "./AppRouter/AppRouter.component";



function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Home/>
      <NavBar />
    </div>
  );
}

export default App;
