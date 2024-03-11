const { readData, saveData } = require("../../data");
const fs = require('fs')
const path = require('path')


module.exports = (req,res) => {
    const {id} = req.params;
    const {name, price, discount, description, category} = req.body;
    const image = req.file
    const products = readData();
    const productMp = products.map(p => {
        if(p.id === +id){
            const productsUp = {
                ...p,
                name: name.trim(), 
                price: +price, 
                discount: +discount, 
                description: description.trim(), 
                category: category.trim(),
                image: image ? image.filename : p.image
            }
         
          
            if(image?.filename){
  const pathBeforeFile = path.join(__dirname, '../../../public/images/products' + p.image)
  const existFile = fs.existsSync(pathBeforeFile)
           if(existFile){
           fs.unlinkSync(pathBeforeFile)
            }
            }
  

            return productsUp

        }
        return p

    })
    saveData(productMp)
    res.redirect(`/productos/detalle/${id}`)
    }