// import './styles/global.css';
import Header from './components/header/Header';
import Navbar from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Members from './components/members/Members';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
