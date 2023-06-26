import Head from "next/head";
import { GA_TRACKING_ID } from "../../lib/gtag";

export const Meta = (props) => {
  const { pageTitle, pageDescription } = props;
  const defaultTitle = "ZRΞK | ゼレック";
  const defaultDescription =
        "ゼレックは、ブロックチェーンの社会実装を目指すスタートアップです。強力な志と優しさを兼ね備えた企業と共に、日本の未来、Web3の未来を本気で創っていきたい。私たちはそんな純粋な想いを原動力に活動しています。あらゆる人が人間らしく生きることができるトークンの経済圏を実現します。";
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;

  return (
    <Head prefix="og: http://ogp.me/ns#">
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content="https://zrek.io/" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="株式会社Zrek" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://zrek.io/static/images/ogp.png"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};
