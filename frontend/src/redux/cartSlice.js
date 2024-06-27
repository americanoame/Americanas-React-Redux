import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  // get the item from local storage and include them in the app state
  // if the item exist at the local storage then we i wanna include them on the state
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  wishListItems: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : [],
  cartTotalQuantity: 0,
  cartTotalAlmount: 0,
  selectedCategory: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`incresed ${state.cartItems[itemIndex].name} cart qunatity`, {
          position: 'bottom-left',
        });
      } else {
        const addinproduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(addinproduct);
        toast.success(`${action.payload.name} to cart`, {
          position: 'bottom-left',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = nextCartItems;
      toast.error(`${action.payload.name} removed from cart`, {
        position: 'bottom-left',
      });
      if (nextCartItems.length === 0) {
        localStorage.removeItem('cartItems');  // Remove cart items from local storage if empty
      } else {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },


    increase(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: 'bottom-left',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decrease(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info(`Decreased ${state.cartItems[itemIndex].name} cart quantity`, {
            position: 'bottom-left',
          });
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
          // toast.error(`${action.payload.name} removed from cart`, {
            toast.error(`Removed ${action.payload.name}  from cart`, {
            position: 'bottom-left',
          });
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    addToWishList(state, action) {
      const existingItem = state.wishListItems.find((item) => item.id === action.payload.id);
      
      if (existingItem) {
        toast.warning(`${existingItem.name} is already on the wish list`, {
          position: 'bottom-left',
        });
      } else {
        state.wishListItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to wish list`, {
          position: 'bottom-left',
        });
      }
    
      localStorage.setItem('wishListItems', JSON.stringify(state.wishListItems));
    },

    removeFromWishList(state, action) {
      const nextWishListItems = state.wishListItems.filter((item) => item.id !== action.payload.id);
      state.wishListItems = nextWishListItems;
      toast.error(`${action.payload.name} removed from wish list`, {
        position: 'bottom-left',
      });
      localStorage.setItem('wishListItems', JSON.stringify(state.wishListItems));
    },

    setSelectedCategory(state, action) { 
      console.log(`Selected category set: ${action.payload}`); 
      state.selectedCategory = action.payload;
    },

    clearCart: (state)  => {
     state.cartItems = []

     // Clear the cart data from local storage
    localStorage.removeItem('cartItems');
    }
  },

});

export const { addToCart, removeFromCart, increase, decrease, addToWishList, removeFromWishList, setSelectedCategory, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
