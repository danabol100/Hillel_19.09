import API from "../constants";
import { store } from "../redux/store";
import { fetchItem } from "../redux/slices/usersSlices";

export const fetchUsers = async () => {
  try {
    const response = await fetch(API.URL_USERS);
    const usersResponse = await response.json();

    store.dispatch(fetchItem(usersResponse));
  } catch (e) {
    console.log("Error", e);
  }
};
