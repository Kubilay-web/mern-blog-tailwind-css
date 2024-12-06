import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// initial state with localStorage data
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart or increase its quantity if already exists
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        // Increase quantity if product already in the cart
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", { position: "bottom-left" });
      } else {
        // Add new product to the cart
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", { position: "bottom-left" });
      }

      // Save updated cart to localStorage and update totals
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartQuantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );

      // Update localStorage with the latest totals
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount.toFixed(2));
    },

    // Decrease product quantity or remove if quantity is 1
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased product quantity", { position: "bottom-left" });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        toast.error("Product removed from cart", { position: "bottom-left" });
      }

      // Update localStorage and totals
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartQuantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );

      // Save updated totals to localStorage
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount.toFixed(2));
    },

    // Remove product completely from cart
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      toast.error("Product removed from cart", { position: "bottom-left" });

      // Update localStorage and totals
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartQuantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );

      // Save updated totals to localStorage
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount.toFixed(2));
    },

    // Get the total quantity and amount from the cart items
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      // Set totals and save them to localStorage
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount.toFixed(2));
    },

    // Clear the cart and reset totals
    clearCart(state) {
      state.cartItems = [];
      toast.error("Cart cleared", { position: "bottom-left" });

      // Reset totals and update localStorage
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
      localStorage.setItem("cartTotalAmount", state.cartTotalAmount.toFixed(2));
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
