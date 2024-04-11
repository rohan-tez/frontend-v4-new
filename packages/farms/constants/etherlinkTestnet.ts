import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { SerializedFarmConfig } from '..'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    lpAddress: '0x0E7F3D246d4D376F6096655D6f305adFeDC062aB',
    token0: etherlinkTestnetTokens.ign,
    token1: etherlinkTestnetTokens.wxtz,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 2,
    lpAddress: '0x9644e26Ef0Ec0659E453dD8035d6b2A169Eb65aa',
    token0: etherlinkTestnetTokens.wxtz,
    token1: etherlinkTestnetTokens.eusd,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 3,
    lpAddress: '0x7fE6e89EAFA7DE640445aD5Ae170930CB502749B',
    token0: etherlinkTestnetTokens.eusd,
    token1: etherlinkTestnetTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 4,
    lpAddress: '0x09528f03C9D23500c15a852aCc537E0316392331',
    token0: etherlinkTestnetTokens.eusd,
    token1: etherlinkTestnetTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
])

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 1,
    lpSymbol: 'IGN-WXTZ LP',
    lpAddress: '0x464222a7f24E98c363370B558Cd3e9fea0F5dFDc',
    quoteToken: etherlinkTestnetTokens.wxtz,
    token: etherlinkTestnetTokens.ign,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms
