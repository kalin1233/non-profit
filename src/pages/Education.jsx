import educationPic from '../assets/education.png';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from "../components/Theme.jsx";
import { WindupChildren } from 'windups';

{/*Education Page created and styled by Favor Wariboko*/}
const StyledImg = styled.img`
    height: 417px;
    width: 626px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
`;


const StyledHeader = styled.h1`
    text-align: center;
    color: black;
    font-size: ${({ theme }) => theme.fontSizes.pageTitle};
    top: 0;
`;

const StyledP = styled.p`
    text-align: center;
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: black;
    width: 80%;
    margin: 0 auto;
    
    
`;

const Styleda = styled.a`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
`;

export default function Education() {
    return (
        <ThemeProvider theme={theme}>
        <div>
        <StyledHeader>
            {/* Used the extra credit from Ashley's group "Windups" */}
        <WindupChildren>
                        <pace ms={100}>{"Education"} </pace>
                    </WindupChildren>
        </StyledHeader>
             <StyledImg src={educationPic} alt="Education"/>
             
             
             <StyledP>Quality education can be scarce in low-income communities. Many youth lack tutoring, mentorship, and essential resources, hindering their potential. Our non-profit breaks these barriers, providing free support and resources for every young person to thrive academically.
Our programs empower youth with real-world knowledge, skills, and experiences. From tutoring to financial literacy education, we bridge the gap between aspiration and achievement.
We understand the challenges faced by families, which is why our services are free. Our goal is to ensure every child, regardless of background, has the tools to succeed.
While the <Styleda href="https://mysticlearningcenter.org/about-us" target="_blank" rel="noopener noreferrer" >Mystic Learning Center</Styleda> is a vital resource, we aim to expand opportunities for growth. Join us in empowering youth and building a stronger community through education.
</StyledP>       
        </div>
        <footer>
                © {new Date().getFullYear()} Non-Profit. All rights reserved.
            </footer>
        </ThemeProvider>
        

    );
}

