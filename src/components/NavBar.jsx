import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
                <NavItem><NavLink to="/Mission">Mission</NavLink></NavItem>
                <NavItem><NavLink to="/Resource">Resource</NavLink></NavItem>
                <NavItem><NavLink to="/Education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/About">About</NavLink></NavItem>
            </NavList>
        </NavbarContainer>
    );
}

export default Navbar;