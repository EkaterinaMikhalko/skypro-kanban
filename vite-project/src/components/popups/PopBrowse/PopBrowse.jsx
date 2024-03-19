import { Link, Navigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "../PopBrowse/PopBrowse.styled";
import { useTask } from "../../../hooks/useTasks";
import CalendarForCurrentTask from "../../Calendar/CalendarForCurrentTask";
import { changeTodo, delTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";

export default function PopBrowse() {
  const { tasks, updateTasks } = useTask();
  const { id } = useParams();
  const { user } = useUser();
  let currentTask = tasks.find((item) => item._id === id);

  if (!currentTask) {
    return <Navigate to={appRoutes.MAIN} />;
  }
  const delCard = async (e) => {
    try {
      e.preventDefault();

      await delTodo({ token: user.token, id }).then((data) => {
        updateTasks(data.tasks);
      });
    } catch (error) {
      alert(error);
    }
  };

  const changeCard = async (e) => {
    try {
      e.preventDefault();
      await changeTodo({ token: user.token, id }).then((data) => {
        updateTasks(data.tasks);
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>
                Название задачи {currentTask.title}
              </S.PopBrowseTtl>
              <S.CategoriesTheme>
                <p className="_orange">{currentTask.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSubttl>Статус</S.StatusPSubttl>
              <S.StatusThemes>
                <S.StatusThemeHideGray>
                  <p>{currentTask.status}</p>
                </S.StatusThemeHideGray>
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    // placeholder="Введите описание задачи..."
                  >
                    {currentTask.description}
                  </S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <CalendarForCurrentTask />
            </S.PopBrowseWrap>

            {/* <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">{currentTask.topic}</p>
                </div>
              </div> */}
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowse onClick={changeCard}>
                  <Link>Редактировать задачу</Link>
                </S.BtnBrowse>
                <S.BtnBrowse onClick={delCard}>
                  <Link>Удалить задачу</Link>
                </S.BtnBrowse>
              </S.BtnGroup>
              <Link to={appRoutes.MAIN}>
                <span className="btn-browse__close _btn-bg _hover01">
                  Закрыть
                </span>
              </Link>
            </S.PopBrowseBtnBrowse>
            {/* <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div> */}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
