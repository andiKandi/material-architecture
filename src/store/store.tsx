import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../store/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
