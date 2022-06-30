//import "./App.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header />
        <About/>
        <Resume/>
    </div>
  );
}
export default App;
