import { Link } from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from "./Theme.jsx";

//Navbar created by Kalin and styled by Thang
const NavbarContainer = styled.nav`
    width: 100vw;
    align-items: center;
    background-color: beige;
`;

const NavList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    padding: .7rem 1rem;
    text-align: center;
    &:hover {
        background-color: aqua;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: black;
`;

function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <NavbarContainer>
                <NavList>
                    <NavItem><NavLink to="/">Home</NavLink></NavItem>
                    <NavItem><NavLink to="/Mission">Mission</NavLink></NavItem>
                    <NavItem><NavLink to="/Resource">Resources</NavLink></NavItem>
                    <NavItem><NavLink to="/Education">Education</NavLink></NavItem>
                    <NavItem><NavLink to="/About">About</NavLink></NavItem>
                </NavList>
            </NavbarContainer>
        </ThemeProvider>
    );
}

export default Navbar;