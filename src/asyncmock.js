const productos = [
    {id:"1", nombre: "Terrazas De Los Andes", precio: 8000, img:"https://www.boozebud.com/cdn/shop/products/1660537522759Terrazas_Malbec-350-937.jpg?v=1680599493&width=713",idCat: "1"},
    {id:"2", nombre: "Fernet", precio: 5000, img:"https://www.boozebud.com/cdn/shop/products/1580949646800slkalsa-350-937.jpg?v=1680587510&width=713",idCat: "5"},
    {id:"3", nombre: "Bombay Sapphire", precio: 6200, img:"https://www.boozebud.com/cdn/shop/products/16697801227111-350-937.jpg?v=1680580343&width=713",idCat: "3"},
    {id:"4", nombre: "Red Label", precio: 6800, img:"https://www.boozebud.com/cdn/shop/products/1609811075043ffdf3-350-937.jpg?v=1680592549&width=713",idCat: "2"},
    {id:"5", nombre: "Heineken", precio: 1500, img:"https://www.boozebud.com/cdn/shop/products/Heineken-Stubby-350-937.gif?v=1680601656&width=713",idCat: "4"},
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(productos);
        }, 100 )
    } )
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    }) 
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}