import { IProduct } from "@/connections/api/ProductAPI";
import ConvertStringMoney from "@/helper/money/ConvertStringMoney";
import { ProductStyled } from "@/styled/ProductStyled";

export function ProductComponent({product}: {product: IProduct}) {
    return (
        <ProductStyled key={`product-all-${product.id}`}>
            <a href={`/produtos/${product.id}`}>
                <h2>{product.name}</h2>
                <img src={product.photos[0]} alt={product.name} width={200} height={200} />
                <p>R$: { ConvertStringMoney(product.annualValue)}</p>
            </a>
        </ProductStyled>
    )
}