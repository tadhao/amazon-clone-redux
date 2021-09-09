import {createSlice} from '@reduxjs/toolkit'
const initialState = {
	items: []
}

export const checkoutItemReducer = createSlice(
	{
		name: "checkoutItems",
		initialState: initialState,
		reducers: {
			addToCart(state, action) {
					state.items.push({key: action.payload, count: 1})
			},
			removeFromCart(state, action) {
				state.items = state.items.filter(product=> product.key !== action.payload)
			},
			addCount(state, action) {
				state.items = state.items.map(product =>{
					if(product.key === action.payload){
						product.count++
					}
					return product
				})
			},
			deductCount(state, action) {
				state.items = state.items.map(product =>{
					if(product.key === action.payload){
						product.count--
					}
					return product
				})
			}
		}
	}
)

export const checkoutItemsAction = checkoutItemReducer.actions