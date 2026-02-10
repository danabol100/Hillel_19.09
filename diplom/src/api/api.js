const BASE_URL = "http://localhost:8080";

export const login = async (login, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
    credentials: "include",
  });
  return response.json();
};

export const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    credentials: "include",
  });
  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return response.json();
};
