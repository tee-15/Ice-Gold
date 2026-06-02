import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  isCartOpen: false,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addToCart: (product) => set((state) => {
    const existingItem = state.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isCartOpen: true // Open cart when item is added
      };
    }
    
    // Parse price string like "$89.00" to number 89.00
    const numericPrice = typeof product.price === 'string' 
      ? parseFloat(product.price.replace(/[^0-9.-]+/g, ""))
      : product.price;

    return {
      cartItems: [...state.cartItems, { 
        id: product.id, 
        title: product.title, 
        price: numericPrice, 
        image: product.image || (product.images && product.images[0]),
        quantity: 1 
      }],
      isCartOpen: true
    };
  }),

  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== productId)
  })),

  updateQuantity: (productId, amount) => set((state) => ({
    cartItems: state.cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + amount);
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
  })),
}));
