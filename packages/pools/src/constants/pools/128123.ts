import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  {
    sousId: 1,
    stakingToken: etherlinkTestnetTokens.ign,
    earningToken: etherlinkTestnetTokens.wxtz,
    contractAddress: '0x0E7F3D246d4D376F6096655D6f305adFeDC062aB',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
  {
    sousId: 2,
    stakingToken: etherlinkTestnetTokens.wxtz,
    earningToken: etherlinkTestnetTokens.eusd,
    contractAddress: '0x9644e26Ef0Ec0659E453dD8035d6b2A169Eb65aa',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
  {
    sousId: 3,
    stakingToken: etherlinkTestnetTokens.eusd,
    earningToken: etherlinkTestnetTokens.usdt,
    contractAddress: '0x7fE6e89EAFA7DE640445aD5Ae170930CB502749B',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
  {
    sousId: 4,
    stakingToken: etherlinkTestnetTokens.eusd,
    earningToken: etherlinkTestnetTokens.usdc,
    contractAddress: '0x09528f03C9D23500c15a852aCc537E0316392331',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
export const finishedPools: SerializedPool[] = []

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
