'use client'

import { useEffect, useState } from "react"

interface IProduct {
  id: number,
  name: string,
  technicalDetails: string,
  annualValue: string,
  photos: string[],
}

export default function Produtos() {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        fetch('http://localhost:3001/user/product?page=1&limit=4')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {products.map(product => (
                <div key={`product-all-${product.id}`}>
                    <h2>{product.name}</h2>
                    <p>{product.technicalDetails}</p>
                    <p>{product.annualValue}</p>
                    <img src={product.photos[0]} alt={product.name} width={200} height={200} />
                </div>
            ))}
        </div>
    )
}