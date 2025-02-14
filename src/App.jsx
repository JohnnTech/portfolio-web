// import './styles/global.css';
import Header from './components/header/Header';
import Navbar from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import About from './components/about/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
