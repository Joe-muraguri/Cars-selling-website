import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body } from "./containers/Body";
import { Brand } from "./containers/Brand";
import { Hero } from "./containers/Hero";
import { Search } from "./containers/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Steps } from "./containers/Steps";



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* <Search />
      <Brand />
      <Body /> */}
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
