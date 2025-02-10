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

// Task 3
// Array Manipulation - Shopping Cart

let cartItems = ["Laptop", "Phone", "Headphones"];
cartItems.push("Tablet"); // Add item at the end
cartItems.pop(); // Remove last item
cartItems.unshift("Smartwatch"); // Add item at the beginning
cartItems.shift(); // Remove first item
console.log(cartItems);

// Task 4

//  Map Method - Price Adjustments

const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9); // Apply 10% discount
console.log(discountedPrices);

// Task 5

// Filter Method - Product Availability
const inventory = [5, 0, 12, 8, 0];
const availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);
