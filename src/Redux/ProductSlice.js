import { createSlice } from '@reduxjs/toolkit'


const ProductSlice = createSlice({
  name: "awwal",
  initialState: {
    cartArray: [],
    NoOfProducts: 0
  },
  reducers: {
    addProduct: (state, action) => {
      const sameProduct = state.cartArray.find((prod) => prod.id === action.payload.id);
      console.log("guy" + sameProduct);
      if (sameProduct) {
        console.log("hello word");
        sameProduct.quantity += 1
      } else {
        let val = state.cartArray
        val.push(action.payload)
        console.log(state.cartArray);
      }
    },
    increamentProduct: (state, action) => {
      const sameProduct = state.cartArray.find((prod) => prod.id === action.payload);
      console.log(action.payload);
      console.log(sameProduct.quantity);
      sameProduct.quantity += 1
      sameProduct.subtotalPrices = sameProduct.productPrice.split("$")[1] * sameProduct.quantity
    },
    decreamentProduct: (state, action) => {
      const sameProduct = state.cartArray.find((prod) => prod.id === action.payload);
      console.log(sameProduct);
      if (sameProduct.quantity == 1) {
        state.cartArray.splice(sameProduct, 1)
      } else {
        sameProduct.quantity -= 1
        sameProduct.subtotalPrices -= sameProduct.productPrice.split("$")[1]
      }
    },
    delecart: (state, action) => {
      let index = action.payload
      state.cartArray.splice(index, 1)
    }
  }
})
export const { addProduct, increamentProduct, decreamentProduct, delecart } = ProductSlice.actions
export default ProductSlice.reducer

