import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { Link } from "react-router-dom";
import {theme} from "../components/Theme.jsx";
import lebImage from "../assets/leb.jpeg";
import kImage from "../assets/k.jpeg";
import { WindupChildren, Pace} from "windups";


// Styled components
const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 20px;
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 10px;
`;

const IntroductionText = styled.p`
    text-align: center;
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.colors.text};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
`;

const FounderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const FounderCard = styled.div`
    width: 200px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
`;

const FounderImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const FounderName = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

const FounderRole = styled.p`
    color: #666;
`;

const ContactLinksContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactLink = styled.a`
  font-size: 18px;
  margin-bottom: 10px;
`;

const QuickLinks = styled.ul`
  list-style-type: none;
  text-align: center;
`;

const QuickLinkItem = styled.li`
  margin-bottom: 10px;
`;

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <HomePageContainer>
                <WindupChildren>
                    <pace ms={100}>{"Welcome to our Non-Profit Organization Website"} </pace>
                </WindupChildren>
                <IntroductionText>
                    This website is the vision of Kalin Toussaint and Lebanos Mengistu, two individuals who grew up in
                    Somerville Mystic Projects, respectively. Recognizing the challenges facing the youth in our
                    communities, we decided to leverage our network and resources to make a difference. Together, we aim
                    to provide innovative solutions and better opportunities for the young people in our neighborhoods.
                </IntroductionText>

                {/* Founders Section */}
                <SectionTitle>Meet Our Founders</SectionTitle>
                <FounderContainer>
                    <FounderCard>
                        <FounderImage src="kImage" alt="Founder 1"/>
                        <FounderName>Lebanos Mengistu</FounderName>
                        <FounderRole>Co-Founder & CEO</FounderRole>
                    </FounderCard>
                    <FounderCard>
                        <FounderImage src="lebImage" alt="Founder 2"/>
                        <FounderName>Kalin Toussaint</FounderName>
                        <FounderRole>Co-Founder & CEO</FounderRole>
                    </FounderCard>
                </FounderContainer>

                {/* Quick Links */}
                <SectionTitle>Quick Links</SectionTitle>
                <QuickLinks>
                    <QuickLinkItem><Link to="/Education">Learn More about Our Education
                        Initiatives</Link></QuickLinkItem>
                    <QuickLinkItem><Link to="/Mission">Understand our Mission</Link></QuickLinkItem>
                    <QuickLinkItem><Link to="/Resources">Explore Our Resources</Link></QuickLinkItem>
                    <QuickLinkItem><Link to="/About">Meet Our Development Team</Link></QuickLinkItem>
                </QuickLinks>

                {/* Contact Us Links */}
                <ContactLinksContainer>
                    <SectionTitle>Contact Us</SectionTitle>
                    <ContactLink href="https://www.linkedin.com/in/linkedin-profile-1" target="_blank"
                                 rel="noopener noreferrer">
                        Contact Lebanos Mengistu on LinkedIn
                    </ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/linkedin-profile-2" target="_blank"
                                 rel="noopener noreferrer">
                        Contact Kalin Toussaint on LinkedIn
                    </ContactLink>
                </ContactLinksContainer>
            </HomePageContainer>
            <footer>
                © {new Date().getFullYear()} Non-Profit. All rights reserved.
            </footer>
        </ThemeProvider>
    );
};

export default HomePage;
