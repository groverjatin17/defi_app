import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { value: { name: "", age: 0, email: "" } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
