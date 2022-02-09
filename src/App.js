import "./App.css";
import NavBar from "./Components/Parts/NavBar/NavBar.Component";
import {AppRouter} from "./AppRouter/AppRouter.component";
import Footer from "./Components/Parts/Footer/Footer.Component";




function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <AppRouter/>
      <NavBar />
      <Footer/>
    </div>
  );
}

export default App;
