const products = [
  { id: 1, name: "Mouse", price: 300, stock: 5 },
  { id: 2, name: "Keyboard", price: 800, stock: 0 },
  { id: 3, name: "Monitor", price: 4500, stock: 3 },
  { id: 4, name: "Headphones", price: 1200, stock: 10 },
];


// A. Productos que tienen stock
    const productsInStock = products.filter(
    product => product.stock > 0
    );
    console.log(productsInStock);
    /*
    Explicacion: El método filter() crea un nuevo array con todos los elementos 
    que cumplan la condición implementada por la función dada. En este caso, 
    estamos filtrando los productos que tienen stock mayor a 0. 
    */

// B. Array con solamente los nombres
    const productNames = products.map(
    product => product.name
    )
    console.log(productNames);
    /*
    Explicacion: El método map() crea un nuevo array con los resultados de llamar 
    una función proporcionada a cada elemento del array original. En este caso, 
    estamos creando un nuevo array con los nombres de los productos.
    */

// C. Producto con id 3
    const productWithId3 = products.find(
    product => product.id === 3
    );
    /*
    Explicacion: El método find() devuelve el primer elemento de un array que 
    cumpla con la condición dada. En este caso, estamos buscando el producto con id 3.
    */
    console.log(productWithId3);

// D. Valor total del inventario
    const totalInventoryValue = products.reduce(
    (total, product) => total + (product.price * product.stock),
    0
    );
    console.log(totalInventoryValue);
    /*
    Explicacion: El método reduce() ejecuta una función reductora en cada elemento del array,
     devolviendo un único valor. En este caso, estamos calculando el valor total del inventario
      multiplicando el precio por el stock de cada producto.
    */

// E. Productos con 10% de descuento
    const discountedProducts = products.map(
    product => ({
        ...product,
        price: product.price * 0.9
    })
    );
    console.log(discountedProducts);
    /*
    Explicacion: El método map() se utiliza nuevamente para crear un nuevo array de productos,
     pero esta vez aplicando un descuento del 10% al precio de cada producto. 
     Se utiliza el operador de propagación (...) para copiar las propiedades 
     del producto original y luego se modifica la propiedad price.
    */