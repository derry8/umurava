"use client"
import localFont from "next/font/local";
import Sidebar from "@/app/components/global/Sidebar";
import Navbar from "@/app/components/global/Navbar";
import { Provider } from 'react-redux';
import store, { persistor } from '@/app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-y-auto">
              <Navbar />
              <main className="flex-1 bg-gray-100">{children}</main>
            </div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
