// https://eth-ropsten.alchemyapi.io/v2/AQj8jzZZnMtdBll3PbfSeou7BqoNJ4F7

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3CitgfembfTasGqwgqvxdfK_nEsWUqrn',
      accounts: [ 'f59ac159a0153d015d252aa416984397f397acad2e1461d3b0de78f8b20d6589']
       
    }
  }
}