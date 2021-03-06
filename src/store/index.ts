import { configureStore } from "@reduxjs/toolkit";

import formTemplatesReducer from "./../slices/form-templates.slice";

import themeReducer from "./../slices/theme-state.slice";

export const store = configureStore({
    reducer: {
        // Reducer for the form templates
        formTemplates: formTemplatesReducer,

        // Reducer for the theme
        theme: themeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
