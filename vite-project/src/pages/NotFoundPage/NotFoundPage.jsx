import { Link } from "react-router-dom";
import { NotFoundDiv, NotFoundSvg } from "./NotFoundPage.styled";
import { appRoutes } from "../../lib/appRoutes";

export default function NotFound() {
  return (
    <NotFoundDiv>
      <Link to={appRoutes.MAIN}>
        <NotFoundSvg img src="\public\images\not_found.svg"/>
      </Link>
    </NotFoundDiv>
  );
}
