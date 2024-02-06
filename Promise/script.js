// consuming Promise

const cart = ["Shirt", "Chinos", "Polo", "Sneakers"];

createOrder(cart)
    .then(function (orderID) {
        console.log(orderID)
        return orderID;
       
    })
    .then(function(orderID){
       return proceedToPayment(orderID);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })

// Produce Promise

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Invalid Cart");
            reject(err);
        }
        // logic  to add the order goes here...
        let orderID = "1234";
        if (orderID) {
            setTimeout(() => resolve(orderID), 5000);
        }

    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function (resolve,reject) {  
        resolve("Payment Successful")
    })

}

function validateCart(cart) {
    return true;
}