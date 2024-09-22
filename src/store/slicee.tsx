import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


type cartoption = {
    isopen:boolean,
    items: { [key: string]: number }; 

}





  const initialState:cartoption ={
    isopen:false,
    items:{},
    

}
  
  

const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
    iscartopen(state){
state.isopen =! state.isopen
    },
    additem(state, action: PayloadAction<string>){

        const product = action.payload
        state.items[product] = (state.items[product] || 0) + 1;
    },
    aremovesingleitem(state, action: PayloadAction<string>){

        const product = action.payload
        state.items[product] = (state.items[product] || 0) - 1;
    },
    removeitem(state,action:PayloadAction<string>){
        delete state.items[action.payload];
            }
        
    }
})

export default cartslice.reducer

export const {iscartopen,additem,removeitem,aremovesingleitem}  = cartslice.actions

