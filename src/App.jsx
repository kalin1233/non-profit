import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './home.jsx';
import Mission from './mission.jsx';
import Resource from './resource.jsx';
import About from './about.jsx';
import Education from './education.jsx';

const NavbarContainer = styled.nav`
    background-color: beige;
`;

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const NavItem = styled.li`
    margin-right: 20px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: black;
`;
function Navbar() {
    return (
        <NavbarContainer>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/mission">Mission</NavLink></NavItem>
                <NavItem><NavLink to="/resource">Resource</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/about">About</NavLink></NavItem>
            </NavList>
        </NavbarContainer>
    );
}

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/resource" element={<Resource />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;