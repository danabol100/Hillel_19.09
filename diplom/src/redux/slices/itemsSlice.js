import { createSlice } from "@reduxjs/toolkit";
import API from "../../constants/constants";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setItems, addItem, setLoading, setError } = itemsSlice.actions;

export const addItemThunk = (item) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(API.URL_ITEMS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    if (!response.ok) throw new Error("Помилка при додаванні товару");

    const data = await response.json();
    dispatch(addItem(data));
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};
export const editItemThunk = (item) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`${API.URL_ITEMS}${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    if (!response.ok) throw new Error("Помилка при редагуванні товару");

    const data = await response.json();
    dispatch(getItemsThunk());
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getItemsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(API.URL_ITEMS);
    const data = await res.json();
    dispatch(setItems(data));
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteItemThunk = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`${API.URL_ITEMS}${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Помилка при видаленні товару");

    dispatch(getItemsThunk());
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default itemsSlice.reducer;
