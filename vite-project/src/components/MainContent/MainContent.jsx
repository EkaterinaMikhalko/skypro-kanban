import { Container } from "../../styled/common/styled.common";
import { Main, MainBlock, StyledMainContent } from "./MainContent.styled";

function MainContent({ children }) {
  return (
    <Main>
      <Container>
        <MainBlock>
          <StyledMainContent>{children}</StyledMainContent>
        </MainBlock>
      </Container>
    </Main>
  );
}
export default MainContent;
