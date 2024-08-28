import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | IguanaDEX',
  defaultTitle: 'Blog | IguanaDEX',
  description: 'Trade, earn and own crypto on Etherlink',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@etherlink',
    site: '@etherlink',
  },
  openGraph: {
    title: '🦎 IguanaDEX - One-stop decentralized trading',
    description: 'Trade, earn and own crypto on Etherlink',
    images: [{ url: 'https://raw.githubusercontent.com/iguanadex/assets/main/iguana_brand_assets/hero.jpg' }],
  },
}
