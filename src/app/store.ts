import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import customerReducer  from '../features/finance/customers/customerSlice';
import taskSlice from '../features/finance/tasks/taskSlice';
import postSlice from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    task: taskSlice,
    post: postSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;