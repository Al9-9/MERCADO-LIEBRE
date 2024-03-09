const { readData, saveData } = require('../../data')


module.exports = (req,res) => {
    const {name, price, discount, category, description} = req.body
    const products = readData();
 
    const newID = products[products.length - 1].id + 1

    const newProduct = {
        id: newID,
        name: name.trim(),
        price: +price,  
        discount: +discount,
        category: category?.trim(),
        description: description.trim(),
        image: "default-image.png",
        
    };
    products.push(newProduct);
    saveData(products)
    res.redirect(`/detalle/${newID}`); 
    }