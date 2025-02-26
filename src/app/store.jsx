import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../features/courses/store/slice";
import authReducer from "../auth/store/slice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    auth: authReducer,
  },
});

export default store;
