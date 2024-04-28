import styled, {ThemeProvider} from 'styled-components';
import {theme} from "../components/Theme.jsx";
import { WindupChildren, Pace} from "windups";
import books from "../assets/books.jpg";

{/*Resource page created by Tat Thang Tong*/}
const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.pageTitle};
    margin-bottom: 10px;
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled.div`
    width: 80%;
    padding-left: 20px;
    text-align: left;
`

const StyledUl = styled.ul`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 10px;
`

const StyledLi = styled.li`
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 10px;
`
const StyledImg = styled.img`
    height: 417px;
    width: 626px;
`


function Resource() {
    return (
        <ThemeProvider theme={theme}>
            <PageContainer>
                <PageTitle>
                    {/* Windup taken from ashley's extra credit assignment*/}
                    <WindupChildren>
                        <pace ms={100}>{"Resources"} </pace> 
                    </WindupChildren> 
                </PageTitle>
                <StyledImg src={books}></StyledImg>
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
                {/*footer taken from About Us page*/}
                <footer>
                    © {new Date().getFullYear()} Non-Profit. All rights reserved.
                </footer>
            </PageContainer>
        </ThemeProvider>
    )
}

export default Resource;