import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Parts/NavBar/NavBar.Component";
import AppRouter from "./AppRouter/AppRouter.component";


function App() {
  return (
    <div className="App">
      <AppRouter/>
      <NavBar />
    </div>
  );
}

export default App;
