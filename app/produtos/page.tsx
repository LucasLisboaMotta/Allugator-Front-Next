'use client'

import { useEffect, useState  } from "react"
import { useSearchParams } from 'next/navigation'
import InfiniteScroll from "react-infinite-scroll-component"
import ProductAPI, { IProduct } from "../../connections/api/ProductAPI"
import { ProductComponent } from "@/components/product/ProductComponet"
import { ProductBoxStyled } from "@/styled/ProductStyled"

export default function Produtos() {
    const searchParams = useSearchParams()
    const productByPage = 5;
    const search = searchParams.get('search') || '';
    const [products, setProducts] = useState<IProduct[]>([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        ProductAPI.getAll({search, page: 1, limit: productByPage})
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        ProductAPI.getAll({search, page: 1, limit: productByPage})
            .then(data => setProducts(data));
    }, [search])
    const fetchData = async () => {
        const countNextProducts =  products.length + productByPage;
              ProductAPI.getAll({search, page: 1, limit: countNextProducts})
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
            <ProductBoxStyled>
            {
                products.map(product => (
                    <ProductComponent key={`product-all-${product.id}`} product={product} />
                ))
            }
            </ProductBoxStyled>
        </InfiniteScroll>
    )
}