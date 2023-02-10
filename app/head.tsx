import Script from "next/script";

export default function Head() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nikoloz Tchavtchanidze",
        jobTitle: "Front-End Developer",
        url: "https://ntch.vercel.app/",
        sameAs: [
            "https://www.linkedin.com/in/nikoloztchavtchanidze/",
            "https://github.com/nchavchanidze",
        ],
        skills: "HTML, CSS, SCSS, Javascript, React.js, Next.js, Styled Components",
    };

    return (
        <>
            <title>Nikoloz Tchavtchanidze</title>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />

            <meta
                name="description"
                content="Nikoloz Tchavtchanidze is a Front end developer with expertise in Javascript, React.js and Next.js View his portfolio to learn more."
            />
            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="Nikoloz Tchavtchanidze" />
            <meta
                property="og:description"
                content="Nikoloz Tchavtchanidze is a Front end developer with expertise in Javascript, React.js and Next.js View his portfolio to learn more."
            />
            <meta property="og:image" content="/Assets/images/og-img.png" />
            <meta property="og:url" content="https://ntch.vercel.app/" />

            <meta name="twitter:title" content="Nikoloz Tchavtchanidze" />
            <meta
                name="twitter:description"
                content="Nikoloz Tchavtchanidze is a Front end developer with expertise in Javascript, React.js and Next.js View his portfolio to learn more."
            />
            <meta name="twitter:image" content="/Assets/images/og-img.png" />
            <meta name="twitter:url" content="https://ntch.vercel.app/" />

            <meta
                name="keywords"
                content="front-end developer, web developer, UI/UX, HTML, CSS, JavaScript, React, Next, Bootstrap, SASS/SCSS, responsive, portfolio, web design, user experience, user interface, web development, front-end, interactive, web apps, skills, expertise, projects, designs, passion, creating, user-friendly, web applications, development, frontend, webdev, UI, UX, web, front, development, design, HTML/CSS, ReactJS, NextJS, SASS, SCSS, responsive design"
            />

            <meta
                name="google-site-verification"
                content="OKuE_fBtfiUJ2-RdSwuxVU3tceFJOzrsoy98s3BWEBU"
            />

            <meta name="msapplication-TileColor" content="#B5C5FF" />
            <meta
                name="msapplication-TileImage"
                content="/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#000000" />

            <link rel="canonical" href="https://ntch.vercel.app/" />
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />

            <Script id="schema-script" type="application/ld+json">
                {JSON.stringify(schema)}
            </Script>

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
        </>
    );
}
