import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/styled.common";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function Header() {
  const { user } = useUser();
  console.log (user)
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight>
            <Link to={appRoutes.MAIN}>
              <S.HeaderLogoImg src="images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <Link to={appRoutes.MAIN}>
              <S.HeaderLogoImg src="images/logo_dark.png" alt="logo" />
            </Link>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
              <Link to={appRoutes.NEWTASK}>
              Создать новую задачу
              </Link>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={togglePopup}>{user.name}</S.HeaderUser>
            {isOpened && (
              <S.HeaderPopUserSet id="user-set-target">
                <Link onClick={togglePopup}>x</Link>
                <S.PopUserSetName>{user.name}</S.PopUserSetName>
                <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
                {/* <S.PopUserSetTheme>
                  <S.PopUserSetThemeText>Темная тема</S.PopUserSetThemeText>
                  <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
                </S.PopUserSetTheme> */}
                <S.ExitButton type="button">
                  <Link to={appRoutes.EXIT}>Выйти</Link>
                </S.ExitButton>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
