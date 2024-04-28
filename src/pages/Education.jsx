import educationPic from '../assets/education.png';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from "../components/Theme.jsx";

const StyledImg = styled.img`
    width: 100%;
    max-height: 100%;
    position: absolute;
`;

const OverlayDiv = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
`;

const StyledHeader = styled.h1`
    position: absolute;
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.pageTitle};
    top: 0;
`;

const StyledP = styled.p`
    position: absolute;
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: white;
    top: 150px;
    width: 80%;
`;

const Styleda = styled.a`
color: lightblue;
text-decoration: underline;
cursor: pointer;
`;

export default function Education() {
    return (
        <ThemeProvider theme={theme}>
        <div>
             <StyledImg src={educationPic} alt="Education"/>
             <OverlayDiv/>
             <StyledHeader>Education</StyledHeader>
             <StyledP>Quality education can be scarce in low-income communities. Many youth lack tutoring, mentorship, and essential resources, hindering their potential. Our non-profit breaks these barriers, providing free support and resources for every young person to thrive academically.
Our programs empower youth with real-world knowledge, skills, and experiences. From tutoring to financial literacy education, we bridge the gap between aspiration and achievement.
We understand the challenges faced by families, which is why our services are free. Our goal is to ensure every child, regardless of background, has the tools to succeed.
While the <Styleda href="https://mysticlearningcenter.org/about-us" target="_blank" rel="noopener noreferrer" >Mystic Learning Center</Styleda> is a vital resource, we aim to expand opportunities for growth. Join us in empowering youth and building a stronger community through education.
</StyledP>       
        </div>
        </ThemeProvider>

    );
}

