import { ContextApi } from '@pancakeswap/localization'
import {
  DropdownMenuItemType,
  DropdownMenuItems,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  MoreIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import { SUPPORT_CAKE_STAKING, SUPPORT_FARMS, SUPPORT_ONLY_BSC } from 'config/constants/supportChains'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity Pools'),
          href: '/liquidity',
        },
        {
          label: t('Perpetual Swaps'),
          href: getPerpetualUrl({
            chainId,
            languageCode,
            isDark,
          }),
          confirmModalId: 'usCitizenConfirmModal',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Bridge'),
          href: 'https://bridge.etherlink.com/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        // {
        //   label: `${t('Limit')} (V2)`,
        //   href: '/limit-orders',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/decorations/3d-coin.png',
        // },
        // {
        //   label: t('Buy Crypto'),
        //   LabelIcon: NewIconButton,
        //   href: '/buy-crypto',
        //   status: { text: t('New'), color: 'success' },
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Explore'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/info/v3',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/liquidity',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('IGN Staking'),
          href: '/cake-staking',
          supportChainIds: SUPPORT_CAKE_STAKING,
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Trading Reward'),
          href: '/trading-reward',
          hideSubNav: true,
          supportChainIds: SUPPORT_ONLY_BSC,
        },
        {
          label: t('Trading Competition'),
          href: '/competition',
          image: '/images/decorations/tc.png',
          hideSubNav: true,
          supportChainIds: SUPPORT_ONLY_BSC,
        },
        // {
        //   label: t('Pools'),
        //   href: '/pools',
        //   supportChainIds: POOL_SUPPORTED_CHAINS,
        // },
        // {
        //   label: t('Liquid Staking'),
        //   href: '/liquid-staking',
        //   supportChainIds: POOL_SUPPORTED_CHAINS,
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    // {
    //   label: t('Win'),
    //   href: '/prediction',
    //   icon: TrophyIcon,
    //   fillIcon: TrophyFillIcon,
    //   supportChainIds: SUPPORT_ONLY_BSC,
    //   items: [
    //     {
    //       label: t('Trading Reward'),
    //       href: '/trading-reward',
    //       hideSubNav: true,
    //     },
    //     {
    //       label: t('Trading Competition'),
    //       href: '/competition',
    //       image: '/images/decorations/tc.png',
    //       hideSubNav: true,
    //     },
    //     {
    //       label: t('Prediction (BETA)'),
    //       href: '/prediction',
    //       image: '/images/decorations/prediction.png',
    //     },
    //     {
    //       label: t('Lottery'),
    //       href: '/lottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //     {
    //       label: t('Pottery (BETA)'),
    //       href: '/pottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //   ],
    // },
    // {
    //   label: t('Game'),
    //   icon: PancakeProtectorIcon,
    //   hideSubNav: true,
    //   items: [
    //     {
    //       label: t('Pancake Protectors'),
    //       href: 'https://protectors.pancakeswap.finance',
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //       status: { text: t('New'), color: 'success' },
    //     },
    //   ],
    // },
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        // {
        //   label: t('Info'),
        //   href: '/info/v3',
        // },
        // {
        //   label: t('IFO'),
        //   href: '/ifo',
        //   supportChainIds: SUPPORT_ONLY_BSC,
        //   image: '/images/ifos/ifo-bunny.png',
        // },
        // {
        //   label: t('Affiliate Program'),
        //   href: '/affiliates-program',
        // },
        {
          label: t('Voting'),
          href: '/voting',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/voting/voting-bunny.png',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Leaderboard'),
          href: '/teams',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/decorations/leaderboard.png',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        // {
        //   label: t('Blog'),
        //   href: 'https://blog.pancakeswap.finance',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        {
          label: t('Docs'),
          href: 'https://docs.iguanadex.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
