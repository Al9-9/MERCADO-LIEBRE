const { readData, saveData } = require('../../data')
const path = require('path')
const fs = require('fs')

module.exports = (req,res) => {
    const {id} = req.params;
    const products = readData()

    const  productDelete = products.filter (p => p.id !== +id)
    const productDestroy = products.find(p => p.id === +id)

    const pathFile = path.join(__dirname, '../../../public/images/products' + productDestroy.image)
    const existFile = fs.existsSync(pathFile)
    if(existFile){
        fs.unlinkSync(pathFile)
    }

    saveData(productDelete)
    res.redirect('/')
    }