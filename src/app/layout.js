import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Jornal O Pombo",
  description: "O Jornal oficial do Colégio Integral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body><Header/>{children}</body>
    </html>
  );
}
