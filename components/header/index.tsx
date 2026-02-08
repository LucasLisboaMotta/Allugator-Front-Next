import Search from "./search";

export function Header() {
    return (
        <header>
            <h1>Header</h1>
            <a href="/produtos">Produtos</a>
            <a href="/carrinho">Carrinho</a>
            <Search />
        </header>
    )
}