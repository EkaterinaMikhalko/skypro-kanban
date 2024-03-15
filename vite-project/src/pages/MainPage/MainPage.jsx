import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTask } from "../../hooks/useTasks";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
export default function MainPage() {
  const {updateTasks, tasks} = useTask ();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        updateTasks(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user]);

  return (
    <>
      <div className="wrapper">
        <Outlet />
        <Header
        // addCard={addCard}
        />
        {isLoading ? (
          "Загрузка..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={tasks.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </div>
    </>
  );
}
