import './App.css';
import Header from './Header.js';
import Body from './Body.js'
import Project from './Project.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Body/>}/>
          <Route exact path="/projects/:place/:id" element={<Project/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
