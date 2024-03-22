import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice"
import productReducer from "./slices/productSlice";

export default configureStore({
    reducer:{
        userSlice,
        products: productReducer
    }
})