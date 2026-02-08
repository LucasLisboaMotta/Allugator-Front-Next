'use client';

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from 'next/navigation'
import ProductAPI, { IProduct } from "@/connections/api/ProductAPI";
import SearchBarStyled from "@/styled/SearchBarStyled";

export default function Search() {
    const searchParams = useSearchParams()
    const querySearch = searchParams.get('search') || '';
    const [search, setSearch] = useState(querySearch);
    const [products, setProducts] = useState<IProduct[]>([]);
    const handleSearch = async ({target: {value}}: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setSearch(value);
        if (value.length >= 3) {
            const products = await ProductAPI.getAll({search: value, page: 1, limit: 3});
            setProducts(products);
        }
    }
    return (
        <SearchBarStyled>
            <div>
                <input  list='search-options' value={search} onChange={handleSearch} />
                <datalist id="search-options">
                    {products.map(product => (
                        <option key={`search-option-${product.id}`} value={product.name} />
                    ))}
                </datalist>
            </div>
            <Link href={`/produtos?search=${search}`}>
                <button>Buscar</button>
            </Link>
        </SearchBarStyled>
    )
}