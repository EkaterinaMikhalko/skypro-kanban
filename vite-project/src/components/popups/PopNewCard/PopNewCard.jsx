import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { postTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useTask } from "../../../hooks/useTasks";

export default function PopNewCard() {
  const { updateTasks } = useTask();
  const { user } = useUser();
  // const {tasks} = useTask();
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleFormSubmit = async () => {
    const TaskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log(TaskData);
    await postTodo({
      task: TaskData,
      token: user.token,
    })
      .then((data) => {
        updateTasks(data.tasks);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <S.PopNewCardDiv id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
                  <S.FormNewArea
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopNewCardWrap>

            <S.ProdCheckbox>
              <S.RadioToolbar>
                <S.RadioToolBarInput
                  type="radio"
                  id="radio1"
                  name="topic"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <S.RadioToolBarLabel htmlFor="radio1">
                  Web Design
                </S.RadioToolBarLabel>

                <S.RadioToolBarInput
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <S.RadioToolBarLabel htmlFor="radio2">
                  Research
                </S.RadioToolBarLabel>

                <S.RadioToolBarInput
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <S.RadioToolBarLabel htmlFor="radio3">
                  Copywriting
                </S.RadioToolBarLabel>
              </S.RadioToolbar>
            </S.ProdCheckbox>

            {/* <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div> */}
            <S.FormNewCreate onClick={handleFormSubmit} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
        .
      </S.PopNewCardContainer>
    </S.PopNewCardDiv>
  );
}
