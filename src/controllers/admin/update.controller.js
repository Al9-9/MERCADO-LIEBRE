const { readData } = require("../../data");


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = (req,res) => {
    const {id} = req.params;
    const {name, price, discount, description, category} = req.body;
    const products = readData();
    const productMp = products.map(p => {
        if(p.id === +id){
            const productsUp = {
                name: name.trim(), 
                price: +price, 
                discount: +discount, 
                description: description.trim(), 
                category: category.trim()
            }

        }

    })
    res.redirect('/productos/detalle')
    }