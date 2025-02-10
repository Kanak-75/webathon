//1. Write a function that takes an input of item prices and returns the total bill.
console.log("Welcome to the Total Bill Program!");

function calculateTotalBill(prices) {
    let total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}

let itemPrices = [100, 2966, 50, 75];
console.log("Item Prices: ", itemPrices);
console.log("Total Bill: Rs. " + calculateTotalBill(itemPrices));
