import HeaderStyled from "@/styled/HeaderStyled";
import Search from "./search";
import Link from "next/link";

export function Header() {
    return (
        <HeaderStyled>
            <Link href="/produtos">Produtos</Link>
            <Search />
            <Link href="/carrinho">Carrinho</Link>
        </HeaderStyled>
    )
}