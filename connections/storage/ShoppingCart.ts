import { IProduct } from "../api/ProductAPI";

export interface ICartProduct {
    product: IProduct,
    quantity: number,
}

class ShoppingCart {
    getCart = (): ICartProduct[] => {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }
    addToCart = (product: IProduct): ICartProduct[] =>  {
        const cart = this.getCart();
        const existingItemIndex = cart.findIndex(item => item.product.id === product.id);
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }
    removeFromCart = (productId: number): ICartProduct[] => {
        const cart = this.getCart();
        const existingItemIndex = cart.findIndex(item => item.product.id === productId);
        if (existingItemIndex !== -1) {
            if (cart[existingItemIndex].quantity > 1) {
                cart[existingItemIndex].quantity -= 1;
            } else {
                cart.splice(existingItemIndex, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }
}

export default new ShoppingCart();