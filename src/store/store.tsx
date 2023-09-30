import { configureStore } from "@reduxjs/toolkit";
import reducer from '../reducer/reducer';
import authReducer from "../reducer/authReducer";
// import { useDispatch } from 'react-redux'

export const store = configureStore(
  {
    reducer: {
      users: reducer,
      auth: authReducer,
    }
  }
);
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch 

export type RootState = ReturnType<typeof store.getState>
