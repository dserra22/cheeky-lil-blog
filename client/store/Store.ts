import {
  configureStore,
  combineReducers,
  applyMiddleware,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import userReducer from "./UserAuth";
import thunk from "redux-thunk";

// import logger from "redux-logger";

const rootReducer = combineReducers({ userReducer });

export const store = configureStore({
  // @ts-ignore
  reducer: {
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// const

// store = createStore(userAuth, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
