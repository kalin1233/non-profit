import React from 'react';
import styled from 'styled-components';
import missionphoto from '../assets/mission.jpeg';
import { WindupChildren, Pace} from "windups";


const PageContainer = styled.div`
    background-color: black;
    color: white;
    min-height: 100vh;
    padding: 0 20px;
    `;

const StyledImg = styled.img`
    width: 100%;
    height: 37.5vh;
`; 

const BoldHeader = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    width: 100%;
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

const StyledFooter = styled.footer`
    text-align: center;
    padding: 10px 0;
    position: relative;
    bottom: 0;
    width: 100%
`;


function Mission() {
    return (
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
                    As founders of Make It Out(MIO), we are passionately committed to creating life-changing opportunities for the youth of our community. In a landscape where low-income families often face formidable challenges, we believe in providing more than just assistance. We offer pathways to empowerment and success.
                    Our non-profit organization is a beacon of hope for those who seek change, guidance, and support. Through mentorship programs, educational resources, and financial assistance, we equip young individuals with the necessary tools to thrive and excel. By addressing the root causes of inequality and limited access to resources, we strive to break the cycle of poverty and build a brighter future for generations to come.
                    We understand community involvment to be an important element in affecting meaningful change. That is why we invite everyone to join us in our cause. Together we can create a community where every young person has the opportunity to fulfill their potential and contribute positively to society.
                    Join us in empowering our youth, transforming lives, and building a stronger, more vibrant community for all.
                </p>
            </ParagraphContainer>
            <StyledFooter>
                <p> Group 2. All rights reserved.</p>
            </StyledFooter>
        </PageContainer>
    );
}

export default Mission;
