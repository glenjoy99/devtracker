import './App.css';
import Header from './Header.js';
import Body from './Body.js'
import Project from './Project.js'
import Footer from './Footer.js'
import Admin from './Admin.js'
import Map from './Map.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Body/>}/>
          <Route exact path="/projects/:place/:id" element={<Project/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/map" element={<Map/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
