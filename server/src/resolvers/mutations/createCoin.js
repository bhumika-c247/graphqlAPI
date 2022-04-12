module.exports = async (_, { input }, { models }) => {
  newERC20Coin = await models.ERC20Coin.create(input);
  return newERC20Coin;
};
