import { Header } from "@/components/header";
import LayoutStyled, { CenterBodyStyled } from "@/styled/LayoutStyled";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LayoutStyled>
        <Header />
        <CenterBodyStyled>
          {children}
        </CenterBodyStyled>
      </LayoutStyled>
    </html>
  );
}
