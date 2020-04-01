import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <head>
          <title>Green | login</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;800&display=swap" rel="stylesheet" />
        </head>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
