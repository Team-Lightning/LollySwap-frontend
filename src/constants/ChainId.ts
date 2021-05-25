const DEFAULT_CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID ?? '0')

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  AURORA = DEFAULT_CHAIN_ID
}
