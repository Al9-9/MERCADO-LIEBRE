const { readData, saveData } = require("../../data");




module.exports = (req,res) => {
    const {id} = req.params;
    const {name, price, discount, description, category} = req.body;
    const products = readData();
    const productMp = products.map(p => {
        if(p.id === +id){
            const productsUp = {
                ...p,
                name: name.trim(), 
                price: +price, 
                discount: +discount, 
                description: description.trim(), 
                category: category.trim()
            }
            return productsUp

        }
        return p

    })
    saveData(productMp)
    res.redirect(`/productos/detalle/${id}`)
    }