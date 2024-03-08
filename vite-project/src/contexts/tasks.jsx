import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes";

// function getTaskFromLocalStorage() {
//   try {
//     return JSON.parse(localStorage.getItem("task"));
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

export const TaskContext = createContext(null);
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);
  const navigate = useNavigate();
  function updateTasks(data) {
    setTasks(data.tasks);
    navigate(appRoutes.MAIN);
    // localStorage.setItem("task", JSON.stringify(task));
  }

  return (
    <TaskContext.Provider value={{ tasks, updateTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
