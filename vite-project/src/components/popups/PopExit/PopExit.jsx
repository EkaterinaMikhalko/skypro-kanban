import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { PopExitYes } from "./PopExit.styled";

function PopExit({logout}) {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
    
              <PopExitYes onClick={logout}>
                Да, выйти
              </PopExitYes>
      
              <Link to={appRoutes.MAIN}>
              <span className="pop-exit__exit-no _hover03" id="exitNo">
                Нет, остаться
              </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;
