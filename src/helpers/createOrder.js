const createOrder = (product) => {
    return ({id:product.id,name:product.name, color:product.color, img:product.img, price:product.price})
}

export default createOrder;