"use client"; 
import { Provider } from 'react-redux';
import store from '@/app/redux/store';
import "./globals.css";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white"
      >
       <Provider store={store}>  {/* Ensure Provider wraps your whole app */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}