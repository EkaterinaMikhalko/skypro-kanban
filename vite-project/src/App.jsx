import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signup from "./pages/SignupPage/SignupPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import './App.css'
import { useState } from "react";

export default function App() {
  const [ user, setUser ] = useState(true);
function login () {
  setUser (true);
}

function logout () {
  setUser (false);
}

  return (
    <Routes>
      <Route element={<PrivateRoute user={user}/>}>
        <Route path={appRoutes.MAIN} element={<MainPage/>}>
        <Route path={appRoutes.TASK} element={<TaskPage/>}/>
        <Route path={appRoutes.EXIT} element={<ExitPage logout={logout}/>}/>
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<Login login={login}/>} />
      <Route path={appRoutes.SIGNUP} element={<Signup />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
