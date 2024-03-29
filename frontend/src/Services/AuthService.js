import { AiOutlineConsoleSql } from "react-icons/ai";

export default {
  login: (user) => {
    return fetch("/user/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  loginAdmin: (user) => {
    console.log(user);
    return fetch("/admin/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
  register: (user) => {
    console.log(user);
    return fetch("/user/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  logout: () => {
    return fetch("/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch("/user/authenticated")
      .then((res) => {
        if (res.status !== 401)
          return res
            .json()
            .then((data) => data)
            .catch((data) => data);
        else
          return { isAuthenticated: false, user: { username: "", role: "" } };
      })
      .catch((err) => {
        return { isAuthenticated: false, user: { username: "", role: "" } };
      });
  },
};
