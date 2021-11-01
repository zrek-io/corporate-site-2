import Head from 'next/head'
import OGP from "../../static/ogp.png"

export const Meta = (props) => {
  const { pageTitle, pageDescription } = props;
  const defaultTitle = 'Zrek Inc.'
  const defaultDescription = 'ゼットレックは、デジタルテクノロジーを駆使して、持続可能な社会の実現を目指すスタートアップです。優しくて強い意志をもった人や企業と共に、良い未来を本気で創っていきたい。私たちはそんな純粋な想いを原動力に、活動しています。画期的なシステムを構築し、あらゆる人が人間らしく生きることができる世界を創っていきます。'

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription

  return (
    <Head prefix="og: http://ogp.me/ns#">
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      {/* <meta property="og:url" content="" /> */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="株式会社Zrek" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OGP} />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
