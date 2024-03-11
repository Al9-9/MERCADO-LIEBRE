const { readData, saveData } = require('../../data')


module.exports = (req,res) => {
    const {name, price, discount, category, description} = req.body
    const image = req.file
    const products = readData();
 
    const newID = products[products.length - 1].id + 1

    const newProduct = {
        id: newID,
        name: name.trim(),
        price: +price,  
        discount: +discount,
        category: category?.trim(),
        description: description.trim(),
        image: image ? image.filename : "default-image.png"
        
    };
    products.push(newProduct);
    saveData(products)
    res.redirect(`/detalle/${newID}`); 
    }