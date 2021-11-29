const TOKENS = {
  ETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  BAT: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  TUSD: '0x0000000000085d4780B73119b644AE5ecd22b376',
  KNC: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
  ZRX: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
  MANA: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
  PAXUSD: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LRC: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  BAL: '0xba100000625a3754423978a60c9317c58a424e3D',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  GUSD: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
  UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  RENBTC: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  UNIV2DAIETH: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
  UNIV2WBTCETH: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
  UNIV2USDCETH: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
  UNIV2DAIUSDC: '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5',
  UNIV2ETHUSDT: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
  UNIV2LINKETH: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
  UNIV2UNIETH: '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
  UNIV2WBTCDAI: '0x231B7589426Ffe1b75405526fC32aC09D44364c4',
  UNIV2AAVEETH: '0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f',
  UNIV2DAIUSDT: '0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405',
  RWA001: '0x10b2aA5D77Aa6484886d8e244f0686aB319a270d',
  RWA002: '0xAAA760c2027817169D7C8DB0DC61A2fb4c19AC23',
  RWA003: '0x07F0A80aD7AeB7BfB7f139EA71B3C8f7E17156B9',
  RWA004: '0x873F2101047A62F84456E3B2B13df2287925D3F9',
  RWA005: '0x6DB236515E90fC831D146f5829407746EDdc5296',
  RWA006: '0x4EE03cfBF6E784c462839f5954d60f7C2B60b113',
  MATIC: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
  'PSM-USDC': '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  'PSM-PAX': '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
  GUNIV3DAIUSDC1: '0xAbDDAfB225e10B90D798bB8A886238Fb835e2053',
  WSTETH: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  ADAI: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',

  VAT: '0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B',
  JUG: '0x19c0976f590D67707E62397C87829d896Dc0f1F1',
  SPOT: '0x65C79fcB50Ca1594B025960e539eD7A9a6D434A3',

  DIRECT: '0xa13C0c8eB109F5A13c6c90FC26AFb23bEB3Fb04a',
  PSM: '0x7bbd8cA5e413bCa521C2c80D8d1908616894Cf21',
  'PSM-USDC_A': '0x0A59649758aa4d66E25f08Dd01271e891fe52199',
  DAI: '0x9759A6Ac90977b93B58547b4A71c78317f391A28',
};
export const addressMap = {
  TOKENS,
  ILKS: {
    'ETH-A': '0xF32836B9E1f47a0515c6Ec431592D5EbC276407f',
    'ETH-B': '0xD499d71bE9e9E5D236A07ac562F7B6CeacCa624c',
    'ETH-C': TOKENS.ETH,
    'BAT-A': '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
    'USDC-A': '0xbe359e53038E41a1ffA47DAE39645756C80e557a',
    'USDC-B': '0x77282aD36aADAfC16bCA42c865c674F108c4a616',
    'WBTC-A': '0x58CD24ac7322890382eE45A3E4F903a5B22Ee930',
    'TUSD-A': '0x9E4b213C4defbce7564F2Ac20B6E3bF40954C440',
    'KNC-A': '0x57B01F1B3C59e2C0bdfF3EC9563B71EEc99a3f2f',
    'ZRX-A': '0xa4341cAf9F9F098ecb20fb2CeE2a0b8C78A18118',
    'MANA-A': '0x0a1D75B4f49BA80724a214599574080CD6B68357',
    'PAXUSD-A': '0x52D5D1C05CC79Fc24A629Cb24cB06C5BE5d766E7',
    'USDT-A': '0x667F41d0fDcE1945eE0f56A79dd6c142E37fCC26',
    'COMP-A': '0x524826F84cB3A19B6593370a5889A58c00554739',
    'LRC-A': '0x7FdDc36dcdC435D8F54FDCB3748adcbBF70f3dAC',
    'LINK-A': '0xB907EEdD63a30A3381E6D898e5815Ee8c9fd2c85',
    'BAL-A': '0xb2b9bd446eE5e58036D2876fce62b7Ab7334583e',
    'YFI-A': '0xEe4C9C36257afB8098059a4763A374a4ECFE28A7',
    'GUSD-A': '0xCAa8D152A8b98229fB77A213BE16b234cA4f612f',
    'UNI-A': '0xF5b8cD9dB5a0EC031304A7B815010aa7761BD426',
    'RENBTC-A': '0x30BC6eBC27372e50606880a36B279240c0bA0758',
    'AAVE-A': '0x16e1b844094c885a37509a8f76c533B5fbFED13a',
    'UNIV2DAIETH-A': '0x57dfd99f45747DD55C1c432Db4aEa07FBd5d2B5c',
    'UNIV2WBTCETH-A': '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    'UNIV2USDCETH-A': '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    'UNIV2DAIUSDC-A': '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5',
    'UNIV2ETHUSDT-A': '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
    'UNIV2LINKETH-A': '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
    'UNIV2UNIETH-A': '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
    'UNIV2WBTCDAI-A': '0x231B7589426Ffe1b75405526fC32aC09D44364c4',
    'UNIV2AAVEETH-A': '0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f',
    'UNIV2DAIUSDT-A': '0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405',
    'RWA001-A': '0x10b2aA5D77Aa6484886d8e244f0686aB319a270d',
    'RWA002-A': '0xAAA760c2027817169D7C8DB0DC61A2fb4c19AC23',
    'RWA003-A': '0x07F0A80aD7AeB7BfB7f139EA71B3C8f7E17156B9',
    'RWA004-A': '0x873F2101047A62F84456E3B2B13df2287925D3F9',
    'RWA005-A': '0x6DB236515E90fC831D146f5829407746EDdc5296',
    'RWA006-A': '0x4EE03cfBF6E784c462839f5954d60f7C2B60b113',
    'MATIC-A': '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    'PSM-USDC-A': '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    'PSM-PAX-A': '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
    'GUNIV3DAIUSDC1-A': '0xAbDDAfB225e10B90D798bB8A886238Fb835e2053',
    'WSTETH-A': '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    'DIRECT-AAVEV2-DAI': '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
  },
  // used to get locked data in the ilks
  MCD_JOIN: {
    MCD_JOIN_ETH_A: '0x2F0b23f53734252Bda2277357e97e1517d6B042A',
    MCD_JOIN_ETH_B: '0x08638eF1A205bE6762A8b935F5da9b700Cf7322c',
    MCD_JOIN_ETH_C: '0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E',
    MCD_JOIN_BAT_A: '0x3D0B1912B66114d4096F48A8CEe3A56C231772cA',
    MCD_JOIN_USDC_A: '0xA191e578a6736167326d05c119CE0c90849E84B7',
    MCD_JOIN_USDC_B: '0x2600004fd1585f7270756DDc88aD9cfA10dD0428',
    MCD_JOIN_WBTC_A: '0xBF72Da2Bd84c5170618Fbe5914B0ECA9638d5eb5',
    MCD_JOIN_TUSD_A: '0x4454aF7C8bb9463203b66C816220D41ED7837f44',
    MCD_JOIN_KNC_A: '0x475F1a89C1ED844A08E8f6C50A00228b5E59E4A9',
    MCD_JOIN_ZRX_A: '0xc7e8Cd72BDEe38865b4F5615956eF47ce1a7e5D0',
    MCD_JOIN_MANA_A: '0xA6EA3b9C04b8a38Ff5e224E7c3D6937ca44C0ef9',
    MCD_JOIN_PAXUSD_A: '0x7e62B7E279DFC78DEB656E34D6a435cC08a44666',
    MCD_JOIN_USDT_A: '0x0Ac6A1D74E84C2dF9063bDDc31699FF2a2BB22A2',
    MCD_JOIN_COMP_A: '0xBEa7cDfB4b49EC154Ae1c0D731E4DC773A3265aA',
    MCD_JOIN_LRC_A: '0x6C186404A7A238D3d6027C0299D1822c1cf5d8f1',
    MCD_JOIN_LINK_A: '0xdFccAf8fDbD2F4805C174f856a317765B49E4a50',
    MCD_JOIN_BAL_A: '0x4a03Aa7fb3973d8f0221B466EefB53D0aC195f55',
    MCD_JOIN_YFI_A: '0x3ff33d9162aD47660083D7DC4bC02Fb231c81677',
    MCD_JOIN_GUSD_A: '0xe29A14bcDeA40d83675aa43B72dF07f649738C8b',
    MCD_JOIN_UNI_A: '0x3BC3A58b4FC1CbE7e98bB4aB7c99535e8bA9b8F1',
    MCD_JOIN_RENBTC_A: '0xFD5608515A47C37afbA68960c1916b79af9491D0',
    MCD_JOIN_AAVE_A: '0x24e459F61cEAa7b1cE70Dbaea938940A7c5aD46e',
    MCD_JOIN_UNIV2DAIETH_A: '0x2502F65D77cA13f183850b5f9272270454094A08',
    MCD_JOIN_UNIV2WBTCETH_A: '0xDc26C9b7a8fe4F5dF648E314eC3E6Dc3694e6Dd2',
    MCD_JOIN_UNIV2USDCETH_A: '0x03Ae53B33FeeAc1222C3f372f32D37Ba95f0F099',
    MCD_JOIN_UNIV2DAIUSDC_A: '0xA81598667AC561986b70ae11bBE2dd5348ed4327',
    MCD_JOIN_UNIV2ETHUSDT_A: '0x4aAD139a88D2dd5e7410b408593208523a3a891d',
    MCD_JOIN_UNIV2LINKETH_A: '0xDae88bDe1FB38cF39B6A02b595930A3449e593A6',
    MCD_JOIN_UNIV2UNIETH_A: '0xf11a98339FE1CdE648e8D1463310CE3ccC3d7cC1',
    MCD_JOIN_UNIV2WBTCDAI_A: '0xD40798267795Cbf3aeEA8E9F8DCbdBA9b5281fcC',
    MCD_JOIN_UNIV2AAVEETH_A: '0x42AFd448Df7d96291551f1eFE1A590101afB1DfF',
    MCD_JOIN_UNIV2DAIUSDT_A: '0xAf034D882169328CAf43b823a4083dABC7EEE0F4',
    MCD_JOIN_RWA001_A: '0x476b81c12Dc71EDfad1F64B9E07CaA60F4b156E2',
    MCD_JOIN_RWA002_A: '0xe72C7e90bc26c11d45dBeE736F0acf57fC5B7152',
    MCD_JOIN_RWA003_A: '0x1Fe789BBac5b141bdD795A3Bc5E12Af29dDB4b86',
    MCD_JOIN_RWA004_A: '0xD50a8e9369140539D1c2D113c4dC1e659c6242eB',
    MCD_JOIN_RWA005_A: '0xA4fD373b93aD8e054970A3d6cd4Fd4C31D08192e',
    MCD_JOIN_RWA006_A: '0x5E11E34b6745FeBa9449Ae53c185413d6EdC66BE',
    MCD_JOIN_MATIC_A: '0x885f16e177d45fC9e7C87e1DA9fd47A9cfcE8E13',
    MCD_JOIN_PSM_USDC_A: '0x0A59649758aa4d66E25f08Dd01271e891fe52199',
    MCD_JOIN_PSM_PAX_A: '0x7bbd8cA5e413bCa521C2c80D8d1908616894Cf21',
    MCD_JOIN_GUNIV3DAIUSDC1_A: '0xbFD445A97e7459b0eBb34cfbd3245750Dba4d7a4',
    MCD_JOIN_WSTETH_A: '0x10CD5fbe1b404B7E19Ef964B63939907bdaf42E2',
    MCD_JOIN_DIRECT_AAVEV2_DAI: '0xa13C0c8eB109F5A13c6c90FC26AFb23bEB3Fb04a',
  },
  // used to get locked data in the ilks
  MEDIAN: {
    ETH: '0x64de91f5a373cd4c28de3600cb34c7c6ce410c85',
    BAT: '0x18B4633D6E39870f398597f3c1bA8c4A41294966',
    WBTC: '0xe0F30cb149fAADC7247E953746Be9BbBB6B5751f',
    KNC: '0x83076a2F42dc1925537165045c9FDe9A4B71AD97',
    ZRX: '0x956ecD6a9A9A0d84e8eB4e6BaaC09329E202E55e',
    MANA: '0x681c4F8f69cF68852BAd092086ffEaB31F5B812c',
    USDT: '0x56D4bBF358D7790579b55eA6Af3f605BcA2c0C3A',
    COMP: '0xA3421Be733125405Ea20aA853839D34b364eB524',
    LRC: '0xcCe92282d9fe310F4c232b0DA9926d5F24611C7B',
    LINK: '0xbAd4212d73561B240f10C56F27e6D9608963f17b',
    BAL: '0x1D36d59e5a22cB51B30Bb6fA73b62D73f4A11745',
    YFI: '0x89AC26C0aFCB28EC55B6CD2F6b7DAD867Fa24639',
    UNI: '0x52f761908cC27B4D77AD7A329463cf08baf62153',
    RENBTC: '0xe0F30cb149fAADC7247E953746Be9BbBB6B5751f',
    AAVE: '0xe62872DFEbd323b03D27946f8e2491B454a69811',
    UNIV2DAIETH: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
    UNIV2WBTCETH: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    UNIV2USDCETH: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    UNIV2DAIUSDC: '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5',
    UNIV2ETHUSDT: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
    UNIV2LINKETH: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
    UNIV2UNIETH: '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
    UNIV2WBTCDAI: '0x231B7589426Ffe1b75405526fC32aC09D44364c4',
    UNIV2AAVEETH: '0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f',
    UNIV2DAIUSDT: '0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405',
    MATIC: '0xfe1e93840D286C83cF7401cB021B94b5bc1763d2',
  },
  PIP: {
    RWA001: '0x76A9f30B45F4ebFD60Ce8a1c6e963b1605f7cB6d',
    RWA002: '0xd2473237E20Bd52F8E7cE0FD79403A6a82fbAEC8',
    RWA003: '0xDeF7E88447F7D129420FC881B2a854ABB52B73B8',
    RWA004: '0x5eEE1F3d14850332A75324514CcbD2DBC8Bbc566',
    RWA005: '0x8E6039C558738eb136833aB50271ae065c700d2B',
    RWA006: '0xB8AeCF04Fdf22Ef6C0c6b6536896e1F2870C41D3',
    'PSM-USDC': '0x77b68899b99b686F415d074278a9a16b336085A0',
    'PSM-PAX': '0x043B963E1B2214eC90046167Ea29C2c8bDD7c0eC',
  },
  MULTICALL: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  FLIP: {
    'ETH-A': '0xF32836B9E1f47a0515c6Ec431592D5EbC276407f',
    'ETH-B': '0xD499d71bE9e9E5D236A07ac562F7B6CeacCa624c',
    // 'ETH-C': TOKENS.ETH,
    'BAT-A': '0xF7C569B2B271354179AaCC9fF1e42390983110BA',
    'USDC-A': '0xbe359e53038E41a1ffA47DAE39645756C80e557a',
    'USDC-B': '0x77282aD36aADAfC16bCA42c865c674F108c4a616',
    'WBTC-A': '0x58CD24ac7322890382eE45A3E4F903a5B22Ee930',
    'TUSD-A': '0x9E4b213C4defbce7564F2Ac20B6E3bF40954C440',
    'KNC-A': '0x57B01F1B3C59e2C0bdfF3EC9563B71EEc99a3f2f',
    'ZRX-A': '0xa4341cAf9F9F098ecb20fb2CeE2a0b8C78A18118',
    'MANA-A': '0x0a1D75B4f49BA80724a214599574080CD6B68357',
    'PAXUSD-A': '0x52D5D1C05CC79Fc24A629Cb24cB06C5BE5d766E7',
    'USDT-A': '0x667F41d0fDcE1945eE0f56A79dd6c142E37fCC26',
    'COMP-A': '0x524826F84cB3A19B6593370a5889A58c00554739',
    'LRC-A': '0x7FdDc36dcdC435D8F54FDCB3748adcbBF70f3dAC',
    'LINK-A': '0xB907EEdD63a30A3381E6D898e5815Ee8c9fd2c85',
    'BAL-A': '0xb2b9bd446eE5e58036D2876fce62b7Ab7334583e',
    'YFI-A': '0xEe4C9C36257afB8098059a4763A374a4ECFE28A7',
    'GUSD-A': '0xCAa8D152A8b98229fB77A213BE16b234cA4f612f',
    'UNI-A': '0xF5b8cD9dB5a0EC031304A7B815010aa7761BD426',
    'RENBTC-A': '0x30BC6eBC27372e50606880a36B279240c0bA0758',
    'AAVE-A': '0x16e1b844094c885a37509a8f76c533B5fbFED13a',
    'UNIV2DAIETH-A': '0x57dfd99f45747DD55C1c432Db4aEa07FBd5d2B5c',
    // 'UNIV2WBTCETH-A': '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    // 'UNIV2USDCETH-A': '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    // 'UNIV2DAIUSDC-A': '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5',
    // 'UNIV2ETHUSDT-A': '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
    // 'UNIV2LINKETH-A': '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
    // 'UNIV2UNIETH-A': '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
    // 'UNIV2WBTCDAI-A': '0x231B7589426Ffe1b75405526fC32aC09D44364c4',
    // 'UNIV2AAVEETH-A': '0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f',
    // 'UNIV2DAIUSDT-A': '0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405',
    // 'RWA001-A': '0x10b2aA5D77Aa6484886d8e244f0686aB319a270d',
    // 'RWA002-A': '0xAAA760c2027817169D7C8DB0DC61A2fb4c19AC23',
    // 'RWA003-A': '0x07F0A80aD7AeB7BfB7f139EA71B3C8f7E17156B9',
    // 'RWA004-A': '0x873F2101047A62F84456E3B2B13df2287925D3F9',
    // 'RWA005-A': '0x6DB236515E90fC831D146f5829407746EDdc5296',
    // 'RWA006-A': '0x4EE03cfBF6E784c462839f5954d60f7C2B60b113',
    // 'MATIC-A': '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    // 'PSM-USDC-A': '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    // 'PSM-PAX-A': '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
    // 'GUNIV3DAIUSDC1-A': '0xAbDDAfB225e10B90D798bB8A886238Fb835e2053',
    // 'WSTETH-A': '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    // 'DIRECT-AAVEV2-DAI': '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
  },
};

export const addresses = {
  eth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  bat: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
  pip_eth: '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763',
  vat: '0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B',
  jug: '0x19c0976f590D67707E62397C87829d896Dc0f1F1',
  spot: '0x65C79fcB50Ca1594B025960e539eD7A9a6D434A3',
  pot: '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7',
  cat: '0xa5679C04fc3d9d8b0AaB1F0ab83555b301cA70Ea',
  flip: {
    'ETH-A': '0xF32836B9E1f47a0515c6Ec431592D5EbC276407f',
    'ETH-B': '0xD499d71bE9e9E5D236A07ac562F7B6CeacCa624c',
    // 'ETH-C': TOKENS.ETH,
    'BAT-A': '0xF7C569B2B271354179AaCC9fF1e42390983110BA',
    'USDC-A': '0xbe359e53038E41a1ffA47DAE39645756C80e557a',
    'USDC-B': '0x77282aD36aADAfC16bCA42c865c674F108c4a616',
    'WBTC-A': '0x58CD24ac7322890382eE45A3E4F903a5B22Ee930',
    'TUSD-A': '0x9E4b213C4defbce7564F2Ac20B6E3bF40954C440',
    'KNC-A': '0x57B01F1B3C59e2C0bdfF3EC9563B71EEc99a3f2f',
    'ZRX-A': '0xa4341cAf9F9F098ecb20fb2CeE2a0b8C78A18118',
    'MANA-A': '0x0a1D75B4f49BA80724a214599574080CD6B68357',
    'PAXUSD-A': '0x52D5D1C05CC79Fc24A629Cb24cB06C5BE5d766E7',
    'USDT-A': '0x667F41d0fDcE1945eE0f56A79dd6c142E37fCC26',
    'COMP-A': '0x524826F84cB3A19B6593370a5889A58c00554739',
    'LRC-A': '0x7FdDc36dcdC435D8F54FDCB3748adcbBF70f3dAC',
    'LINK-A': '0xB907EEdD63a30A3381E6D898e5815Ee8c9fd2c85',
    'BAL-A': '0xb2b9bd446eE5e58036D2876fce62b7Ab7334583e',
    'YFI-A': '0xEe4C9C36257afB8098059a4763A374a4ECFE28A7',
    'GUSD-A': '0xCAa8D152A8b98229fB77A213BE16b234cA4f612f',
    'UNI-A': '0xF5b8cD9dB5a0EC031304A7B815010aa7761BD426',
    'RENBTC-A': '0x30BC6eBC27372e50606880a36B279240c0bA0758',
    'AAVE-A': '0x16e1b844094c885a37509a8f76c533B5fbFED13a',
    'UNIV2DAIETH-A': '0x57dfd99f45747DD55C1c432Db4aEa07FBd5d2B5c',
  },
  flap: '0xC4269cC7acDEdC3794b221aA4D9205F564e27f0d',
  flop: '0xA41B6EF151E06da0e34B009B86E828308986736D',
  vow: '0xA950524441892A31ebddF91d3cEEFa04Bf454466',
  pause: '0xbE286431454714F511008713973d3B053A2d38f3',
  esm: '0x0581A0AbE32AAe9B5f0f68deFab77C6759100085',
  end: '0xaB14d3CE3F733CACB76eC2AbE7d2fcb00c99F3d5',
  mcd_flash: '0x1EB4CF3A948E7D72A198fe073cCb8C7a948cD853',

  MCD_JOIN_ETH_A: '0x2F0b23f53734252Bda2277357e97e1517d6B042A',
  MCD_JOIN_ETH_B: '0x08638eF1A205bE6762A8b935F5da9b700Cf7322c',
  MCD_JOIN_ETH_C: '0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E',
  MCD_JOIN_BAT_A: '0x3D0B1912B66114d4096F48A8CEe3A56C231772cA',

  MCD_VAT: '0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B',

  MULTICALL: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',

  MEDIAN_ETH: '0x64de91f5a373cd4c28de3600cb34c7c6ce410c85',
  MEDIAN_BAT: '0x18B4633D6E39870f398597f3c1bA8c4A41294966',
};
