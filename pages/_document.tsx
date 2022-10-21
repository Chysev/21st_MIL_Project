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

                    <meta
                        id="meta-application-name"
                        name="application-name"
                        content="Disneflix"
                    />
                    <meta
                        id="meta-description"
                        name="description"
                        content="Disneflix | 28.10.22 | 100 Tula Para Kay Stella | We are the production team, and we are dedicated to bringing you one of the best student films you have ever seen"
                    />
                    <meta
                        id="meta-keywords"
                        name="keywords"
                        content="Stella, Fidel, Fidel's Dad, Barloza, Chuck, Danica, Barrie, Sol, Hunter, Stella's Sister, Von, Rasul"
                    />

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}