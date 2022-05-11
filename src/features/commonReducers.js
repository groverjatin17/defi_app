import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "isDarkMode",
    initialState: { value: false },
    reducers: {
        setDarkMode: (state, action) => {
            state.value = !state.value;
        },
    },
});

const drawerSlice = createSlice({
    name: "isDrawerOpen",
    initialState: { value: false },
    reducers: {
        toggleDrawer: (state, action) => {
            state.value = !state.value;
        },
    },
});

const languageSlice = createSlice({
    name: "language",
    initialState: { value: "en-US" },
    reducers: {
        setLocale: (state, action) => {
            state.value = action.payload;
        },
    },
});

//exporting Drawer
export const drawerReducer = drawerSlice.reducer;
export const { toggleDrawer } = drawerSlice.actions;

//exporting DarkMode
export const darkModeReducer = darkModeSlice.reducer;
export const { setDarkMode } = darkModeSlice.actions;

//exporting language
export const languageReducer = languageSlice.reducer;
export const { setLocale } = languageSlice.actions;
