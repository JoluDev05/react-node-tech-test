// Exercise 02 - Order dashboard
// Resolve each TODO without changing the original data.

const orders = [
    {
        id: 101,
        customer: { name: "Ana", email: "ana@example.com" },
        status: "delivered",
        items: [
            { name: "Keyboard", price: 800, quantity: 1 },
            { name: "Mouse", price: 300, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: { name: "Luis", email: "luis@example.com" },
        status: "pending",
        items: [
            { name: "Monitor", price: 4500, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: { name: "Sofia" },
        status: "cancelled",
        items: [
            { name: "Headphones", price: 1200, quantity: 1 },
        ],
    },
    {
        id: 104,
        customer: null,
        status: "delivered",
        items: [
            { name: "Webcam", price: 1500, quantity: 2 },
        ],
    },
];

// 1. Filter: create a new array with only delivered orders.
    const deliveredOrders = orders.filter(order => order.status === "delivered");
    //Con el filter estamos re creando el array filtrando por el valor de delivered en todo el array orders,
    // guardando el resultado en deliveredOrders.

// 2. Map: create an array with the order IDs.
    const orderIds = orders.map(order => order.id);
    //Con el map estamos re creando el array con solo los IDs de cada orden.

// 3. Find: find the order with id 102.
    const pendingOrder = orders.find(
    order => order.id === 102
    );
    //con el metodo find, estamos buscando hasta encontrar la orden con id 102, 
    // parando el codigo hasta encontrarlo

// 4. Reduce: calculate the total value of all non-cancelled orders.
//    Each item's value is price * quantity.
    const totalSales = orders.reduce((total, order) => {
        if (order.status !== "cancelled") { // Verificamos que la orden no esté cancelada con el diferente que
            const orderTotal = order.items.reduce((orderSum, item) => {
                return orderSum + (item.price * item.quantity);
            }, 0);
            return total + orderTotal;
        }
        return total;
    }, 0);
    //Con el reduce estamos sumando el total de todas las ordenes no canceladas.

// 5. Sort: create a new array sorted from the most expensive order to the cheapest.
//    Do not mutate the original orders array.
    const ordersByValue = [...orders].sort((a, b) => {
        const totalA = a.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalB = b.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return totalB - totalA;
    });
    // aqui buscamos crear un nuevo array sin mutar el original, por eso hacemos la coppia con el spread operator, y luego lo ordenamos de mayor a menor con el sort,
    // para eso calculamos el total de cada orden con el reduce y luego restamos totalB - totalA para que quede de mayor a menor.

// 6. Destructuring: obtain the name and status from pendingOrder.
    const { name: pendingCustomerName } = pendingOrder.customer;
    const { status: pendingStatus } = pendingOrder;
    //Con destructuring estamos obteniendo el nombre del cliente y el estado de la orden pendiente,
    // y los estamos guardando en las variables pendingCustomerName y pendingStatus respectivamente 

// 7. Spread: create a new order based on order 102 with status "delivered".
//    The original order must remain unchanged.
    const completedOrder = {
        ...pendingOrder,
        status: "delivered",
    };
    //Con el spread operator estamos creando un nuevo objeto basado en la orden pendiente,
    // pero cambiando el estado a "delivered", sin modificar la orden original

// 8. Optional chaining and ternary: create customer labels for every order.
//    Expected style: "Ana - ana@example.com" or "Customer without email".
    const customerLabels = orders.map(order => {
        const customerName = order.customer?.name || "Customer without name";
        const customerEmail = order.customer?.email || "Customer without email";
        return `${customerName} - ${customerEmail}`;
    });
    //Con el map estamos creando un nuevo array con los labels de cada cliente,
    //usando el  || para manejar los casos donde el cliente o el email no existan, y 
    // el optional chaining ? para evitar errores al acceder a propiedades de objetos que pueden ser null o undefined

// 9. Rest: implement a function that receives any number of prices and returns
//    their total. Then use it with 100, 250 and 50.
    function sumPrices(...prices) {
        return prices.reduce((total,prices) => total + prices, 0);
        
    }
    const selectedPricesTotal = sumPrices(100, 250, 50);
    //Con el rest operator estamos creando una funcion que recibe cualquier cantidad de precios,
    //luego usamos el reduce para sumarlos y devolver el total, luego llamamos a la funcion con los precios 100, 250 y 50.

// 10. Functions + map + reduce: create a function that receives an order and
//     returns its total. Use it to create an array of order totals.
    function getOrderTotal(order) {
        return order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    const orderTotals = orders.map(getOrderTotal);
    //Con la funcion getOrderTotal estamos calculando el total de cada orden usando el reduce para sumar el precio por la cantidad de cada item,
    // luego usamos el map para crear un nuevo array con los totales de cada orden.

// 11. Promises and async/await: this simulates a request to a server.
    function fetchOrderById(orderId) {
        return new Promise((resolve, reject) => {
            const order = orders.find(({ id }) => id === orderId);

            setTimeout(() => {
                if (order) {
                    resolve(order);
                } else {
                    reject(new Error("Order not found"));
                }
            }, 300);
        });
    }
    // Con la funcion fetchOrderById estamos simulando una solicitud a un servidor para obtener una orden 
    // por su ID,usando una promesa que se resuelve si la orden existe y se rechaza si no existe, 
    // con un retraso de 300ms para simular la latencia de la red.

// 12. Try/catch: complete this function so it returns the customer's name
//     when the order exists, or "Unable to load order" when it does not.
    async function loadCustomerName(orderId) {
        try {
            const order = await fetchOrderById(orderId);
            return order.customer?.name || "Unable to load order";
        } catch (error) {
            return "Unable to load order";
        }
    }
    // Con la funcion loadCustomerName estamos usando async/await para esperar la respuesta 
    // de fetchOrderById,y luego devolvemos el nombre del cliente si la orden existe, 
    // o "Unable to load order" si no existe o si hay un error.

    async function main() {
        console.log("1) Delivered orders:", deliveredOrders);
        console.log("2) Order IDs:", orderIds);
        console.log("3) Pending order:", pendingOrder);
        console.log("4) Total sales:", totalSales);
        console.log("5) Orders by value:", ordersByValue);
        console.log("6) Pending customer:", pendingCustomerName, pendingStatus);
        console.log("7) Completed order:", completedOrder);
        console.log("8) Customer labels:", customerLabels);
        console.log("9) Selected prices total:", selectedPricesTotal);
        console.log("10) Order totals:", orderTotals);
        console.log("11) Customer 101:", await loadCustomerName(101));
        console.log("12) Customer 999:", await loadCustomerName(999));
    }

    main();

// Expected checkpoints after solving:
// - deliveredOrders has 2 orders.
// - orderIds is [101, 102, 103, 104].
// - pendingCustomerName is "Luis" and pendingStatus is "pending".
// - totalSales is 8600.
// - selectedPricesTotal is 400.
// - orderTotals is [1400, 4500, 1200, 3000].
// - Customer 101 is "Ana" and customer 999 is "Unable to load order".
