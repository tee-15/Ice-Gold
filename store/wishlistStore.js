import { create } from 'zustand';

export const useWishlistStore = create((set, get) => ({
  wishlistItems: [],

  toggleWishlist: (product) => set((state) => {
    const isWishlisted = state.wishlistItems.some(item => item.id === product.id);
    
    if (isWishlisted) {
      // Remove from wishlist
      return {
        wishlistItems: state.wishlistItems.filter(item => item.id !== product.id)
      };
    } else {
      // Add to wishlist
      return {
        wishlistItems: [...state.wishlistItems, product]
      };
    }
  }),

  isInWishlist: (productId) => {
    return get().wishlistItems.some(item => item.id === productId);
  }
}));
