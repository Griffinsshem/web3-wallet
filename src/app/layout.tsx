import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/web3-provider";
import { ThemeProvider } from "@/components/theme-provider";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web3 Wallet Landing",
  description: "Landing page with MetaMask wallet integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Web3Provider>
            {children}
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
