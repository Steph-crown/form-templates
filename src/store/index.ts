import { api } from "./../services/index";
import { configureStore } from "@reduxjs/toolkit";

import formTemplatesReducer from "./../slices/form-templates.slice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,

        // Reducer for the form templates
        formTemplates: formTemplatesReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
