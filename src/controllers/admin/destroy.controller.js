const { readData, saveData } = require('../../data')



module.exports = (req,res) => {
    const {id} = req.params;
    const products = readData()

    const  productDelete = products.filter (p => p.id !== +id)

    saveData(productDelete)
    res.redirect('/')
    }