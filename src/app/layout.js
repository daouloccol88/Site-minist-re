import "@/styles/globals.css"
import "@/styles/boostrap.css"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="bg-body-secondary">
          <Header/>
          {children}
          <Footer/>
        <script src="/js/boostrap.js"></script>
        </body>
    </html>
  );
}
