const { readData } = require("../../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = (req, res) =>  {

    const products = readData();
    const productsSale = products.filter(p => p.category === "in-sale")
    const productsVisited = products.filter(p => p.category === "visited")
    res.render('other/index', {productsSale, productsVisited, toThousand}
    )
}