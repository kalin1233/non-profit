import styled, {ThemeProvider} from 'styled-components';
import GlobalStylesProvider from '../components/GlobalStyles';
import {theme} from "../components/Theme.jsx";
import { WindupChildren, Pace} from "windups";

const PageTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.PageTitle};
    margin-bottom: 10px;
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-size: 20px;
`;

const ContentContainer = styled.div`
    width: 80%;
    padding-left: 20px;
    text-align: left;
`

const StyledUl = styled.ul`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.large};;
    margin-bottom: 10px;
`

const StyledLi = styled.li`
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.medium};;
    margin-bottom: 10px;
`

function Resource() {
    return (
        <PageContainer>
            <PageTitle>Resource Page</PageTitle>
            <ContentContainer>
                <StyledUl>Financial Learning:
                    <StyledLi>
                        <a href={"https://www.khanacademy.org/college-careers-more/financial-literacy"}>Khan Academy</a>
                    </StyledLi>
                    <StyledLi>
                        <a href={"https://www.skillshare.com/en/browse/lifestyle"}>Skill Share</a>
                    </StyledLi>
                </StyledUl>
                <StyledUl>Education:
                    <StyledLi>
                        <a href={"https://www.youtube.com/channel/UCtFRv9O2AHqOZjjynzrv-xg"}>Youtube Learning</a>
                    </StyledLi>
                    <StyledLi>
                        <a href={"https://www.ed.gov/coronavirus/resources-for-learning-at-home"}>U.S. Department of Education</a>
                    </StyledLi>
                </StyledUl>
                <StyledUl>Dummy Donation page for those who want to help:
                    <StyledLi>
                        <a href={"https://form.jotform.com/241088150592153"}>Dummy Donation page</a>
                    </StyledLi>
                </StyledUl>
            </ContentContainer>
        </PageContainer>
    )
}

export default Resource;