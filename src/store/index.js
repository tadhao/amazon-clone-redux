import {configureStore} from '@reduxjs/toolkit'
import { checkoutItemReducer } from './checkout-item-reducer'
const store = configureStore({
    reducer: checkoutItemReducer.reducer 
})

export default store