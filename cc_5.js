// Task 1

// Declare an object customer with the properties 
const customer = { name: "John Doe", age: 35, email: "john.doe@email.com" };
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2

// Object Methods - Order Details
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function () {
        console.log(`Order ID: ${this.orderId}, Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder();
