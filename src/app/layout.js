import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Jornal O Pombo",
  description: "O Jornal oficial do Colégio Integral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body><Toaster position="top-center"/><Header/>{children}</body>
    </html>
  );
}
