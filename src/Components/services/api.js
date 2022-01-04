const BASE_URL = "https://61c47b11f1af4a0017d995b3.mockapi.io/contacts";

const fetchContacts = async () => {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const optionsPost = (postToAdd) => ({
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const addContact = async (contact) => {
  const res = await fetch(`${BASE_URL}`, optionsPost(contact));
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const delContact = async (contacts) => {
  //   console.log(contacts[0].id);
  const res = await fetch(`${BASE_URL}/${contacts[0].id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};
export { fetchContacts, addContact, delContact };

const BASE_URLL = "https://connections-api.herokuapp.com";

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */

const post = (postnewAcc) => ({
  method: "POST",
  body: JSON.stringify(postnewAcc),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const register = async (newAcc) => {
  // console.log(newAcc);
  const res = await fetch(`${BASE_URLL}/users/signup`, post(newAcc));
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

export { register };
