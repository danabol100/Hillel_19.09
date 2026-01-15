import API from "../constants";
import { store } from "../redux/store";
import { fetchItem } from "../redux/slices/usersSlices";

export const fetchUsers = async (value) => {
  try {
    const response = await fetch(`${API.URL_USERS}${value}`);
    const usersResponse = await response.json();
    const usersResponseString = JSON.stringify(usersResponse, null, 2);

    store.dispatch(fetchItem(usersResponseString));
  } catch (e) {
    console.log("Error", e);
  }
};
