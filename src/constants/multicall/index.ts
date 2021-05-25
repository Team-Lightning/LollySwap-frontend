import { ChainId } from '@uniswap/sdk'
import { DEFAULT_CHAIN_ID } from './../../constants';
import MULTICALL_ABI from './abi.json'

// @ts-ignore
ChainId[DEFAULT_CHAIN_ID] = 'AURORA'

// @ts-ignore
ChainId['AURORA'] = DEFAULT_CHAIN_ID

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.AURORA]: '0x2931d3a566abeFc388e2C93235832716F7C50900'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
