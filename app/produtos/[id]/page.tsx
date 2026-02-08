'use client';

import Product, { IProduct } from "@/connections/api/Product";
import ShoppingCart from "@/connections/storage/ShoppingCart";
import {useParams} from 'next/navigation'
import { useEffect, useMemo, useState } from "react";

export default function ProdutoId() {
    const { id } = useParams<{id: string}>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [countCart, setCountCart] = useState<number>(0);

    useEffect(() => {
        if (!id) return;
        Product.getById(id)
            .then(data => {
                setProduct(data);
                setCurrentPhotoIndex(0);
            });
        const cart = ShoppingCart.getCart();
        const findIntenCart = cart.find((item) => item.product.id === parseInt(id));
        setCountCart(findIntenCart?.quantity || 0);
    }, [id]);

    const buttonClick = (add: boolean) => {
        if (!product) return;
        if (add) {
            const cart = ShoppingCart.addToCart(product);
            const findIntenCart = cart.find((item) => item.product.id === parseInt(id));
            setCountCart(findIntenCart?.quantity || 0);
        } else {
            const cart = ShoppingCart.removeFromCart(parseInt(id));
            const findIntenCart = cart.find((item) => item.product.id === parseInt(id));
            setCountCart(findIntenCart?.quantity || 0);
        }
    }

    const photos = useMemo(() => product?.photos ?? [], [product]);

    const handlePrev = () => {
        if (photos.length === 0) return;
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const handleNext = () => {
        if (photos.length === 0) return;
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.technicalDetails}</p>
            <p>{product.annualValue}</p>

            {photos.length > 0 ? (
                <div>
                    <div>
                        <button type="button" onClick={handlePrev} aria-label="Foto anterior">
                            ◀
                        </button>
                        <img
                            src={photos[currentPhotoIndex]}
                            alt={`${product.name} photo ${currentPhotoIndex + 1}`}
                            width={360}
                            height={360}
                        />
                        <button type="button" onClick={handleNext} aria-label="Próxima foto">
                            ▶
                        </button>
                    </div>
                    <div>
                        {photos.map((photo, index) => (
                            <button
                                key={`product-${product.id}-photo-${index}`}
                                type="button"
                                onClick={() => setCurrentPhotoIndex(index)}
                                aria-label={`Ir para foto ${index + 1}`}
                            >
                                <img
                                    src={photo}
                                    alt={`${product.name} thumbnail ${index + 1}`}
                                    width={72}
                                    height={72}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Sem fotos disponíveis.</p>
            )}

            <div>
                <button type="button" onClick={() => buttonClick(true)}>
                    Adicionar ao carrinho
                </button>
            </div>
            <div>
                {countCart} {countCart   === 1 ? 'item' : 'itens'} no carrinho
            </div>
            <div>
                <button type="button" onClick={() => buttonClick(false)}>
                    Remover do carrinho
                </button>
            </div>
        </div>
    );
}