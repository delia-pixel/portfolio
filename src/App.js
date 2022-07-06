//import "./App.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Services />
      <Portfolio />
    </div>
  );
}
export default App;
