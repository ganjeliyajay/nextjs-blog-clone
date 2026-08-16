import '@/app/globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
