import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./commentSlice";

const rootReducers = combineReducers({
  komentar: todoSlice,
});

export default rootReducers;