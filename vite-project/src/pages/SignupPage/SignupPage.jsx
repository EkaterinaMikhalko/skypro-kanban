import { Link } from "react-router-dom";
import { Wrapper } from "../../styled/common/styled.common";
import * as S from "./SignupPage.styled";
import { appRoutes } from "../../lib/appRoutes";

export default function Signup() {
  return (
    <S.BodySignup>
      <Wrapper>
        <S.ContainerSignup>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormLogin id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtnSignupEnt id="SignUpEnter">
                  <Link to={appRoutes.MAIN}>Зарегистрироваться</Link>
                </S.ModalBtnSignupEnt>
                <S.ModalFormGroup>
                  <S.ModalFormGroupP>
                    Уже есть аккаунт?
                    <S.ModalFormGroupLink>
                      <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                    </S.ModalFormGroupLink>
                  </S.ModalFormGroupP>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignup>
      </Wrapper>
    </S.BodySignup>
  );
}
