import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Rubik:wght@300&family=Teko:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script
                    id="GoogleTagManager"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MV347R8');`,
                    }}
                ></script>
                <script
                    id="GoogleAnalytics"
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CSW4PR3BDJ');`,
                    }}
                ></script>

                <script
                    id="Clarity"
                    dangerouslySetInnerHTML={{
                        __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "cfrdibon20");`,
                    }}
                ></script>

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-CSW4PR3BDJ"
                ></script>

                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MV347R8"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
            </body>
        </Html>
    )
}