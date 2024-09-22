import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slicee"
import userslice from "./userdetailslice"


const Store = configureStore({
    reducer:{
        cart:cartslice,
        user:userslice

    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store