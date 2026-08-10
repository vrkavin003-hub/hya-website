import type { Metadata, Viewport } from "next";
import "geist/font/sans";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import { SiteLoader } from "@/components/site-loader";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { companySchema, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HYA TECH | Precision Manufacturing & Automation Solutions",
    template: "%s | HYA TECH",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Precision manufacturing and industrial automation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logoimg.png",
    apple: "/images/logoimg.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#071a2f" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("hya-theme");var d=t==="dark";var r=document.documentElement;r.classList.toggle("dark",d);r.dataset.theme=d?"dark":"light";r.style.colorScheme=d?"dark":"light"}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <SiteLoader />
        <StructuredData data={companySchema} />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
