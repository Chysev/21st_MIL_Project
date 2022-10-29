import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* cdn fontawesome */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                    />

                    {/*                     <meta
                        id="meta-application-name"
                        name="application-name"
                        content="PinoyTape"
                    />
                    <meta
                        id="meta-description"
                        name="description"
                        content="
                    />
                    <meta
                        id="meta-keywords"
                        name="keywords"
                        content="Stella, Fidel, Fidel's Dad, Barloza, Chuck, Danica, Barrie, Sol, Hunter, Stella's Sister, Von, Rasul"
                    /> */}

                    {/* Default */}
                    <meta name="description" content="PinoyTape | 100 Tula Para Kay Stella | We are the production team, and we are dedicated to bringing you one of the best student films you have ever seen" />
                    <meta name="image" content="../public/img/Background2.png" />

                    {/* Schema Mark Up For Google */}
                    <meta itemProp="name" content="PINOY TAPE " />
                    <meta itemProp="description" content="PinoyTape | 100 Tula Para Kay Stella | We are the production team, and we are dedicated to bringing you one of the best student films you have ever seen" />
                    <meta itemProp="image" content="../public/img/Background2.png" />

                    {/* Open Graph Data */}
                    <meta property="og:title" content="PINOY TAPE" />
                    <meta property="og:type" content="PINOY TAPE" />
                    <meta property="og:url" content="https://pinoytape.vercel.app/" />
                    <meta property="og:image" content="../public/img/Background2.png" />
                    <meta property="og:description" content="PinoyTape | 100 Tula Para Kay Stella | We are the production team, and we are dedicated to bringing you one of the best student films you have ever seen" />
                    <meta property="og:site_name" content="PINOY TAPE" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}