'use client';

import ShoppingCart, { ICartProduct } from "@/connections/storage/ShoppingCart";
import { useEffect, useState } from "react";

export default function Carrinho() {
    const [products, setProducts] = useState<ICartProduct[]>([]);
    useEffect(() => {
        const productsCart = ShoppingCart.getCart();
        setProducts(productsCart);
    }, [])

    const buttonCartClick = (productId: number, add: boolean) => {
        const product = products.find(item => item.product.id === productId)?.product;
        if (!product) return;
        if (add) {
            const cart = ShoppingCart.addToCart(product);
            setProducts(cart);
        } else {
            const cart = ShoppingCart.removeFromCart(productId);
            setProducts(cart);
        }
    }

    return (
        <div>
            <h1>Carrinho</h1>
            {products.length === 0 ? (
                <p>O carrinho está vazio</p>
            ) : (
                <ul>
                    {products.map(({ product, quantity }) => (
                        <li key={product.id}>
                            {product.name} - Quantidade: {quantity}
                            <img src={product.photos ? product.photos[0] : ''} alt={product.name} width={100} height={100} />
                            <button onClick={() => buttonCartClick(product.id, true)}>+</button>
                            <button onClick={() => buttonCartClick(product.id, false)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}