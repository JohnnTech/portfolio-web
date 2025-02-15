import './global.css';
import Header from './components/header/Header';
import Navbar from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import ProjectsSection from './components/projects-section/ProjectsSection';
import { personalProjects, studentProjects } from './data/projects';


function WebContent() {
  return (
    <>
    
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <Navbar />
      <Home />
      <About />
      <h1>Meus Projetos</h1>
      <ProjectsSection title="Projetos Pessoais" projects={personalProjects} />
      <ProjectsSection title="Projetos de Estudantes" projects={studentProjects} />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
