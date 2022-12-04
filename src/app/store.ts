import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { productApi } from "../services/products"
import { authApi } from "../services/auth";
const store = configureStore({
    reducer: {
        authApi: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productApi.middleware, authApi.middleware])
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store