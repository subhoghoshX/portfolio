import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <Script
          id="portfolio-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const isDark = localStorage.getItem("isDark");

              if(isDark === 'true') {
                document.documentElement.classList.add('dark');
              } else if(isDark === 'false') {
                document.documentElement.classList.remove('dark');
              } else if(isDark === null) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('isDark', true);
              }
              `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
