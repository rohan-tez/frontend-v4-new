import { Language } from "../LangSelector/types";
import { DiscordIcon, GithubIcon, TwitterIcon } from "../Svg";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.iguanadex.com/contact-us",
      },
      {
        label: "Community",
        href: "https://discord.gg/yq5bUaT7Cm",
      },
      {
        label: "IGN",
        href: "https://docs.iguanadex.com/tokenomics/ign",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.iguanadex.com",
      },
      {
        label: "Audits",
        href: "https://docs.iguanadex.com/iguanadex-on-mainnet/security-audits",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://x.com/iguanadex",
  },
  {
    label: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/iguana-dex",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/yq5bUaT7Cm",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
