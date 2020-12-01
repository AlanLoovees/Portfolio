import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Current from './components/Current';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Current/>
      <Projects/>
      <Contact/>
      <Footer/>    
    </div>
  );
}

export default App;
