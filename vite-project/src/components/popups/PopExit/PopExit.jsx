import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopExit.styled";
import { useUser } from "../../../hooks/useUser";

export default function PopExit() {
  const {logout} = useUser()
  const navigate = useNavigate();
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <S.PopExitTtlH2>Выйти из аккаунта?</S.PopExitTtlH2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
    
              <S.PopExitYes onClick={()=>{
                logout();
                navigate (appRoutes.LOGIN);
              }}>
                <S.PopExitYesLink>
                Да, выйти
                </S.PopExitYesLink>
              </S.PopExitYes>
      
              <Link to={appRoutes.MAIN}>
              <S.PopExitNo id="exitNo">
                <S.PopExitNoLink>
                Нет, остаться
                </S.PopExitNoLink>
              </S.PopExitNo>
              </Link>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
