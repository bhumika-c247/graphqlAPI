const mongoose = require('mongoose');
const { Schema } = mongoose;

const erc20CoinSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});
const ERC20Coin = mongoose.model('ERC20Coin', erc20CoinSchema);
console.log('ERC20Coin schema', ERC20Coin);
module.exports = { ERC20Coin };
