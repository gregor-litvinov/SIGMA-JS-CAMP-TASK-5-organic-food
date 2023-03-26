
import './App.css';
import Presentation from './components/header/Presentation';
import Nav from "./components/nav/Nav";
import Banner from './components/Pres-Banner/Banner';


function App() {
  return (
    <div className="App">
      <Nav />
      <Presentation />
      <Banner />
    </div>
  );
}

export default App;
