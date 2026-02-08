'use client';

import ShoppingCart, { ICartProduct } from "@/connections/storage/ShoppingCart";
import ConvertStringMoney from "@/helper/money/ConvertStringMoney";
import ShoppingCartStyled, { ShoppingCartItemStyled } from "@/styled/ShoppingCartStyled";
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

    const totalValue = products.reduce((total, item) => {
        const value = parseFloat(item.product.annualValue.replace(/[^0-9.-]+/g,""));
        return total + value * item.quantity;
    }, 0);

    return (
        <ShoppingCartStyled>
            <h1>Carrinho</h1>
            {products.length === 0 ? (
                <p>O carrinho está vazio</p>
            ) : (
                <ul>
                    {products.map(({ product, quantity }) => {
                        const unitValue = parseFloat(product.annualValue.replace(/[^0-9.-]+/g, ""));
                        const subtotal = unitValue * quantity;
                        return (
                        <li key={product.id}>
                            <ShoppingCartItemStyled>
                                <img src={product.photos ? product.photos[0] : ''} alt={product.name} width={100} height={100} />
                                <div className="content">
                                    <h2>{product.name}</h2>
                                    <div className="bottom">
                                        <span>Quantidade: {quantity}</span>
                                        <span className="subtotal">Subtotal: R$ {ConvertStringMoney(subtotal.toFixed(2))}</span>
                                        <div className="actions">
                                            <button className="remove" onClick={() => buttonCartClick(product.id, false)}>-</button>
                                            <button className="add" onClick={() => buttonCartClick(product.id, true)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </ShoppingCartItemStyled>
                        </li>
                        );
                    })}
                </ul>
            )}
            <h2>Total: R$ {ConvertStringMoney(totalValue.toFixed(2))}</h2>
        </ShoppingCartStyled>
    )
}