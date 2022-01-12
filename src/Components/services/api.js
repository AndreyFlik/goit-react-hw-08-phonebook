const BASE_URL = "https://connections-api.herokuapp.com";

const post = (postnewAcc) => ({
  method: "POST",
  body: JSON.stringify(postnewAcc),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const fetchContacts = async (token) => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const optionsPost = (postToAdd, token) => ({
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const addContact = async (contact, token) => {
  const res = await fetch(`${BASE_URL}/contacts`, optionsPost(contact, token));
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const delContact = async (contacts, token) => {
  const res = await fetch(`${BASE_URL}/contacts/${contacts[0].id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }

  return res.json();
};
export { fetchContacts, addContact, delContact };

const register = async (newAcc) => {
  const res = await fetch(`${BASE_URL}/users/signup`, post(newAcc));
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const login = async (logAcc) => {
  const res = await fetch(`${BASE_URL}/users/login`, post(logAcc));
  // console.log(res.status);
  if (res.status === 400) {
    // console.log(`not OK`);
    return Promise.reject(new Error(`Неверный логин и/или пароль`));
  }
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }

  return res.json();
};

const loginOut = async (token) => {
  const res = await fetch(`${BASE_URL}/users/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};
const fetchCurrentUser = async (token) => {
  const res = await fetch(`${BASE_URL}/users/current`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};
export { register, login, loginOut, fetchCurrentUser };
