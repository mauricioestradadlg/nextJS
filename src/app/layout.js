
import "./globals.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";



export const metadata = {
  title: "Pagina de Prueba",
  description: "Mi primer proyecto con Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
