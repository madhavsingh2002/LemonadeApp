import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState ={
    orders: 0,
    stock: 20,
}
const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        AddOrder:(state,action) =>{
            state.orders+=1;
            state.stock-=2;
            
        },
        concelOrder:(state,action) =>{
            state.orders-=1;
            state.stock+=2;
            
        },
        UpdateStoke:(state,action) =>{
            state.stock-=action.payload;
        }
    }
})
export const { AddOrder, UpdateStock,concelOrder } = ProductSlice.actions;
export default ProductSlice.reducer;
