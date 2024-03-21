import { Link, Navigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "../PopBrowse/PopBrowse.styled";
import { useTask } from "../../../hooks/useTasks";
import CalendarForCurrentTask from "../../Calendar/CalendarForCurrentTask";
import { changeTodo, delTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useState } from "react";

export default function PopBrowse() {
  const { tasks, updateTasks } = useTask();
  const { id } = useParams();
  const { user } = useUser();
  let currentTask = tasks.find((item) => item._id === id);
  console.log(currentTask);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [newTask, setNewTask] = useState({
    title: currentTask.title,
    topic: currentTask.topic,
    description: currentTask.description,
    date: selectedDate,
    status: currentTask.status,
  });

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

  const ChangeCard = async (e) => {
    try {
      e.preventDefault();
      const TaskData = {
        ...newTask,
        date: selectedDate,
      };
      await changeTodo({
        token: user.token,
        id,
        task: TaskData,
      }).then((data) => {
        updateTasks(data.tasks);
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  function handleChangeMode() {
    setIsEdit(true);
  }

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              {isEdit ? (
                <>
                  <S.PopBrowseTtlInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    autoFocus
                  ></S.PopBrowseTtlInput>
                </>
              ) : (
                <>
                  <S.PopBrowseTtl>
                    Название задачи {currentTask.title}
                  </S.PopBrowseTtl>
                </>
              )}

              <S.CategoriesTheme>
                <p className="_orange">{currentTask.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSubttl>Статус</S.StatusPSubttl>
              {isEdit ? (
                <>
                  <S.RadioToolbar>
                    <S.RadioToolBarInput
                      type="radio"
                      id="radio1"
                      name="status"
                      value="Без статуса"
                      onChange={handleInputChange}
                    />
                    <S.RadioToolBarLabel htmlFor="radio1">
                      Без статуса
                    </S.RadioToolBarLabel>

                    <S.RadioToolBarInput
                      type="radio"
                      id="radio2"
                      name="status"
                      value="Нужно сделать"
                      onChange={handleInputChange}
                    />
                    <S.RadioToolBarLabel htmlFor="radio2">
                      Нужно сделать
                    </S.RadioToolBarLabel>

                    <S.RadioToolBarInput
                      type="radio"
                      id="radio3"
                      name="status"
                      value="В работе"
                      onChange={handleInputChange}
                    />
                    <S.RadioToolBarLabel htmlFor="radio3">
                      В работе
                    </S.RadioToolBarLabel>

                    <S.RadioToolBarInput
                      type="radio"
                      id="radio3"
                      name="status"
                      value="Тестирование"
                      onChange={handleInputChange}
                    />
                    <S.RadioToolBarLabel htmlFor="radio3">
                      Тестирование
                    </S.RadioToolBarLabel>

                    <S.RadioToolBarInput
                      type="radio"
                      id="radio3"
                      name="status"
                      value="Готово"
                      onChange={handleInputChange}
                    />
                    <S.RadioToolBarLabel htmlFor="radio3">
                      Готово
                    </S.RadioToolBarLabel>
                  </S.RadioToolbar>
                </>
              ) : (
                <>
                  <S.StatusThemes>
                    <S.StatusThemeHideGray>
                      <p>{currentTask.status}</p>
                    </S.StatusThemeHideGray>
                  </S.StatusThemes>
                </>
              )}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  {isEdit ? (
                    <>
                      <S.FormBrowseAreaEdit
                        name="description"
                        value={newTask.description}
                        id="textArea01"
                        onChange={handleInputChange}
                      ></S.FormBrowseAreaEdit>
                    </>
                  ) : (
                    <S.FormBrowseArea>
                      {currentTask.description}
                    </S.FormBrowseArea>
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              {isEdit ? (
                <>
                  <CalendarForCurrentTask
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </>
              ) : (
                <>
                  <CalendarForCurrentTask />
                </>
              )}
            </S.PopBrowseWrap>

            {/* <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">{currentTask.topic}</p>
                </div>
              </div>
               */}
            {!isEdit ? (
              <>
                <S.PopBrowseBtnBrowse>
                  <S.BtnGroup>
                    <S.BtnBrowse onClick={handleChangeMode}>
                      <Link>Редактировать задачу</Link>
                    </S.BtnBrowse>
                    <S.BtnBrowse onClick={delCard}>
                      <Link>Удалить задачу</Link>
                    </S.BtnBrowse>
                  </S.BtnGroup>
                  <Link to={appRoutes.MAIN}>
                    <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
                  </Link>
                </S.PopBrowseBtnBrowse>
              </>
            ) : (
              <>
                <S.PopBrowseBtnEdit>
                  <S.BtnGroup>
                    <S.BtnEditEdit onClick={ChangeCard}>
                      <Link to={appRoutes.MAIN}>Сохранить</Link>
                    </S.BtnEditEdit>
                    <S.BtnEditCancel>
                      <Link to={appRoutes.MAIN}>Отменить</Link>
                    </S.BtnEditCancel>
                    <S.BtnBrowse id="btnDelete" onClick={delCard}>
                      <Link>Удалить задачу</Link>
                    </S.BtnBrowse>
                  </S.BtnGroup>
                  <S.BtnEditClose>
                    <Link to={appRoutes.MAIN}>Закрыть</Link>
                  </S.BtnEditClose>
                </S.PopBrowseBtnEdit>
              </>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
