import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './features/user';
import { darkModeReducer, drawerReducer, languageReducer } from './features/commonReducers';

export default configureStore({
  reducer: {
    user: userReducer,
    isDarkMode: darkModeReducer,
    isDrawerOpen: drawerReducer,
    language: languageReducer,
  },
});
