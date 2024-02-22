import { Link } from "react-router-dom";
import * as S from "./LoginPage.styled";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/styled.common";

export default function Login() {
  return (
    <S.BodyLogin>
      <Wrapper>
        <S.ContainerSignin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>Вход</h2>
              </S.ModalTitle>
              <S.ModalFormLogin action="#">
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter>
                  <Link to={appRoutes.MAIN}>Войти</Link>
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <S.ModalFormGroupP>
                    Нужно зарегистрироваться?
                  </S.ModalFormGroupP>
                  <S.ModalFormGroupLink>
                    <Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
                  </S.ModalFormGroupLink>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignin>
      </Wrapper>
    </S.BodyLogin>
  );
}
