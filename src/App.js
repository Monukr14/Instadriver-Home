import Contact from './components/Contact/Contact';
import Content from './components/Content/Content';
import NavbarTop from './components/NavbarTop/NavbarTop';
import About from './components/About/About'
import Team from './components/Team/Team'
import './App.css'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <NavbarTop /> */}
      <Contact />
      <Content />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
