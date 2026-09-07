import displayOrders from "./displayOrders.js";

const markAsComplete = (userInput) => {
    // Retrieval of existing saved data
    let existingOrderList = JSON.parse(sessionStorage.getItem('orderList'));
    let existingOrderNumber = JSON.parse(sessionStorage.getItem('orderNumber'));
    // Initialize a variable called orderFound to false
    let orderFound = false;
    // If the user input is not equal to 0, we:
    if (userInput != 0) {
        // [1] Loop through the existing order list
        for (const order of existingOrderList) {
            // If the order number of the current order is equal to the user input, we:
            if (order.orderNum === Number(userInput)) {
                // [1] Change the order status of the current order to "complete"
                order.orderStatus = 'complete';
                // [2] Set the orderFound variable to true
                orderFound = true;
            }
        };
        // [2] Check if the orderFound variable is still false, if it is, we:
        if (!orderFound) {
            // [1] Alert the user that they need to enter a valid order number
            alert('Please enter a valid order number');
        };
        // [3] Update the session storage with the new order list
        sessionStorage.setItem('orderList', JSON.stringify(existingOrderList));
        // [4] Update the session storage with the existing order number
        sessionStorage.setItem('orderNumber', JSON.stringify(existingOrderNumber));
        // [5] Call the displayOrders function to update the front-end with the new order status
        displayOrders();
    }
    // Else if the user input is equal to 0, we:
    else if (userInput == 0) {
        // [1] Alert the user that they are not completing an order
        alert("Not completing an order.");
    };
}

export default markAsComplete;