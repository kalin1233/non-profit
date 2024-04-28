import styled, {ThemeProvider}  from 'styled-components';
import missionphoto from '../assets/mission.jpeg';
import {theme} from "../components/Theme.jsx";
import { WindupChildren, Pace} from "windups";
import React from "react";


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const StyledImg = styled.img`
    width: 626px;
    height: 417px;
`; 

const BoldHeader = styled.h1`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.pageTitle};
    margin-top:50px;
    margin-bottom: 0;
`;

const ParagraphContainer = styled.div`
    width: 80%;
    margin: 0 auto 20vh;
    padding-left: 20px;
    text-align: left
`;

const BoldParagraph = styled.p`
    font-weight: bold;
`;


function Mission() {
    return (
        <ThemeProvider theme={theme}>
            <PageContainer>
                <StyledImg src={missionphoto} alt="Mission"/>
                <BoldHeader>
                    <WindupChildren>
                        <pace ms={100}>{"Mission Statement"} </pace>
                    </WindupChildren>
                </BoldHeader>
                <ParagraphContainer>
                    <BoldParagraph>
                        Empowering the Next Generation: Transforming Lives in Our Low-Income Community
                    </BoldParagraph>
                    <p>
                        As founders of Make It Out(MIO), we are passionately committed to creating life-changing
                        opportunities for the youth of our community. In a landscape where low-income families often
                        face formidable challenges, we believe in providing more than just assistance. We offer pathways
                        to empowerment and success.
                        Our non-profit organization is a beacon of hope for those who seek change, guidance, and
                        support. Through mentorship programs, educational resources, and financial assistance, we equip
                        young individuals with the necessary tools to thrive and excel. By addressing the root causes of
                        inequality and limited access to resources, we strive to break the cycle of poverty and build a
                        brighter future for generations to come.
                        We understand community involvment to be an important element in affecting meaningful change.
                        That is why we invite everyone to join us in our cause. Together we can create a community where
                        every young person has the opportunity to fulfill their potential and contribute positively to
                        society.
                        Join us in empowering our youth, transforming lives, and building a stronger, more vibrant
                        community for all.
                    </p>
                </ParagraphContainer>
            </PageContainer>
            {/* Global footer */}
            <footer>
                © {new Date().getFullYear()} Non-Profit. All rights reserved.
            </footer>
        </ThemeProvider>
    );
}

export default Mission;
