import Script from "next/script";
import "@/styles/styles.scss";
import Header from "@/components/Header/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA}`}
            />
            <Script id="ga-script" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GA}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <head />
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
