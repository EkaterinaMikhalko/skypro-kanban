import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signup from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import { GlobalStyles } from "./styled/common/GlobalStyles";
//import "./App.css";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={appRoutes.TASK} element={<TaskPage />} />
            <Route path={appRoutes.EXIT} element={<ExitPage />} />
            <Route path={appRoutes.NEWTASK} element={<NewTaskPage />} />
          </Route>
        </Route>
        <Route path={appRoutes.LOGIN} element={<Login />} />
        <Route path={appRoutes.SIGNUP} element={<Signup />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}
