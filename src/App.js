import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body } from "./containers/Body";
import { Brand } from "./containers/Brand";
import { Hero } from "./containers/Hero";
import { Search } from "./containers/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Steps } from "./containers/Steps";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { KenyanVehicles } from "./containers/KenyanVehicles";



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <main>
        {/* <Search />
        <Brand />
        <Body /> */}
        
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/kenyan_vehicles" element={<KenyanVehicles/>}/>
        </Routes>
        </main>
        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
