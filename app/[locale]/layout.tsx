import type React from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationsProvider } from "@/provider/TranslationsProvider";
import initTranslations from "../i18n";
import { Language } from "@/components/Language";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Personal portfolio showcasing my work as a Software Engineer",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const i18nNamespaces = ["default"];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </head>
        <body
          className={`${inter.className}  bg-fixed  bg-gradient-to-t dark:from-primary/10  from-primary/15  to-background rounded-2xl p-4`}
        >
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            {children}
          </TranslationsProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
