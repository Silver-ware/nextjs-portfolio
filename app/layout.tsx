import "./globals.css";
import { Poppins, Quantico } from "next/font/google";
import Navbar from "@/sections/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${quantico.variable}`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Garry Portfolio</title>
      </head>
      <body
        className={`bg-background overflow-x-hidden antialiased`}
        cz-shortcut-listen="false"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
