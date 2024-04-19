import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Mission from './pages/Mission.jsx';
import Resource from './pages/Resource.jsx';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import Navbar from "./components/NavBar.jsx";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/Mission" element={<Mission />} />
                    <Route path="/Resource" element={<Resource />} />
                    <Route path="/Education" element={<Education />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;