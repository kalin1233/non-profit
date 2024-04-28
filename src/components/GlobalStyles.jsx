import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import {theme} from "./Theme.jsx";


const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.fonts.primary}; 
        font-size: ${({ theme }) => theme.fontSizes.medium}; 
        line-height: 1.6;
        color: black; 
        background-color: ${({ theme }) => theme.colors.background}; 
        margin: 0; 
        padding: 0; 
    }

    h1.page-title {
        font-size: ${({ theme }) => theme.fontSizes.pageTitle}; 
        font-weight: bold; 
        color: black; 
    }
    //simple footer added by Aarsh
    footer {
        width: 100%;
        padding: 20px;
        background-color: #d9c4a9; 
        color: ${({ theme }) => theme.colors.footerText};
        text-align: center;
        position: relative;
        bottom: 0;
    }
`;


const GlobalStylesProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            {children}
        </>
    </ThemeProvider>
);

GlobalStylesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStylesProvider;
