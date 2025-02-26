import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getItemsByUser,
  postItem,
  deleteItem,
  editItem,
} from "../api/coursesAPI";
import { checkDoublons } from "../service/service";
import { toast } from "react-toastify";

const getItemsFromUser = createAsyncThunk(
  "courses/getItemsByUser",
  async ({ userId }) => {
    try {
      const response = await getItemsByUser(userId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const createItem = createAsyncThunk(
  "courses/postItem",
  async ({ name, userId }, { getState }) => {
    try {
      const items = getState().courses.items;
      checkDoublons(items, name);
      const response = await postItem(name, userId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const supprItem = createAsyncThunk("courses/deleteItem", async ({ itemId }) => {
  try {
    const response = await deleteItem(itemId);
    return response;
  } catch (error) {
    throw error;
  }
});

const modifItem = createAsyncThunk(
  "courses/editItem",
  async ({ itemId, name, userId }) => {
    try {
      const response = await editItem(itemId, name, userId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  items: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemsFromUser.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(supprItem.fulfilled, (state, action) => {
        console.log("voici mon action", action);
        state.items = state.items.filter(
          (item) => item.id !== action.meta.arg.itemId
        );
      })
      .addCase(modifItem.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      });
  },
});

export { getItemsFromUser, createItem, supprItem, modifItem };
export default coursesSlice.reducer;
