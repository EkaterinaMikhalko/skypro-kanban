import { Link } from "react-router-dom";
import * as S from "./LoginPage.styled";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/styled.common";
import { useState } from "react";
import { signIn } from "../../api";

export default function Login({ login }) {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleLogin = async () => {
    await signIn(loginData).then((data) => {
      login(data.user);
    })
    .catch((error) => {
      alert(error);
    });
  };

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
                  value={loginData.login}
                  onChange={handleInputChange}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  value={loginData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter onClick={handleLogin}>Войти</S.ModalBtnEnter>
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
