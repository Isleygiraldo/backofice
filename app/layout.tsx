import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SidebarProvider } from "@/components/SidebarContext";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backoffice Pix365 — Orion",
  description: "Backoffice Pix365 com Material Design 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body className="h-screen flex overflow-hidden">
        <SidebarProvider>
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            <Topbar />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
