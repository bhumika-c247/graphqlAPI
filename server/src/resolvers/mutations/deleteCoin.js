
module.exports = async (_, {id}, {models}) => {
    const deleteCoin = await models.ERC20Coin.deleteOne({_id: id});
    
    if(deleteCoin.deletedCount) return{id: id}
}