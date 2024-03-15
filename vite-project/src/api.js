//const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user"

// Авторизация

export function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин и пароль");
    }
    return response.json();
  });
}

//Получение списка задач
export async function getTodos ({token}) { 
    const response = await fetch (baseHost, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (!response.status === 200) {
        throw new Error ("Ошибка");
    }

    const data = await response.json();
    return data;
}

//Регистрация

export function signUpApi({ login, name, password }) {
    return fetch(userHost, {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    }).then((response) => {
      if (response.status === 400) {
        throw new Error("Пользователь уже существует");
      }
      return response.json();
    });
  }

  // Добавление задачи

  export async function postTodo ({task, token}) {
    const response = await fetch (baseHost, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "POST",
        // JSON.stingify принимает в себя объект 
        // task - уже объект, поэтому фигурные скобки не нужны
        body: JSON.stringify(task)
        // body: JSON.stringify({
           // name,
          //  text
        // })
    });

    if (!response.status === 201) {
        throw new Error ("Ошибка");
    }

    const data = await response.json();
    return data;
}

