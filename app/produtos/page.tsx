'use client'

import { useEffect, useState  } from "react"
import { useSearchParams } from 'next/navigation'
import InfiniteScroll from "react-infinite-scroll-component"
import Product, { IProduct } from "../../connections/api/Product"

export default function Produtos() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search') || '';
    const [products, setProducts] = useState<IProduct[]>([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        Product.getAll({search, page: 1, limit: 5})
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        Product.getAll({search, page: 1, limit: 5})
            .then(data => setProducts(data));
    }, [search])
    const fetchData = async () => {
        const countNextProducts =  products.length + 5;
             fetchProducts({search, page: 1, limit: countNextProducts})
            .then(data => {
                 if (data.length < countNextProducts) {
                setHasMore(false)
            }
                setProducts(data);
        }
            );
    }
    return (
        <InfiniteScroll
            dataLength={products.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={ <></>}
            refreshFunction={ () => {}}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
        >
            {products.map(product => (
                <div key={`product-all-${product.id}`}>
                    <a href={`/produtos/${product.id}`}>
                    <h2>{product.name}</h2>
                    {/* <p>{product.technicalDetails}</p> */}
                    <p>{product.annualValue}</p>
                    <img src={product.photos[0]} alt={product.name} width={200} height={200} />
                    </a>
                </div>
            ))}
        </InfiniteScroll>
    )
}