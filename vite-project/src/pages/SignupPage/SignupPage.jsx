import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../styled/common/styled.common";
import * as S from "./SignupPage.styled";
import { appRoutes } from "../../lib/appRoutes";
import { signUpApi } from "../../api";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

export default function Signup() {
  const {login} = useUser();
  const navigate = useNavigate ();
  const [signupData, setSignupData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setSignupData({
      ...signupData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await signUpApi(signupData).then((data) => {
      login(data.user);
      navigate (appRoutes.MAIN);
    })
    .catch((error) => {
      alert(error);
    });
  };
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
                  value={signupData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  value={signupData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={signupData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtnSignupEnt id="SignUpEnter" onClick={handleSignup}>
                  Зарегистрироваться
                </S.ModalBtnSignupEnt>
                <S.ModalFormGroup>
                  <S.ModalFormGroupP>Уже есть аккаунт?</S.ModalFormGroupP>
                  <S.ModalFormGroupLink>
                    <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
                  </S.ModalFormGroupLink>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSignup>
      </Wrapper>
    </S.BodySignup>
  );
}
