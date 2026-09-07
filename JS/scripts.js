import createOrder from "./createOrder.js";
import displayOrders from "./displayOrders.js";
import markAsComplete from "./markAsComplete.js";

// =============================================================== //
//        Initialising session storage with default values         //
// =============================================================== //

// If the session storage does not have an item called "orderList", we:
if (!sessionStorage.getItem('orderList')) {
// [1] Create an empty array and store it to session storage with the key "orderList"
    sessionStorage.setItem('orderList', JSON.stringify([]));
}
// If the session storage does not have an item called "orderNumber", we:
if (!sessionStorage.getItem('orderNumber')) {
    // [1] Create an initial order number of 0, then store it to session storage with the key "orderNumber"
    sessionStorage.setItem('orderNumber', JSON.stringify(0));
}

displayOrders();

document.addEventListener('click', (e) => {
    if (e.target.id === 'submit-button') {
        // Prevent default refresh behaviour
        e.preventDefault();
        // [1] Retrieve the value of the element with the "main-ingredient" id and store it to a variable called user input
        const userInput = document.getElementById('main-ingredient').value;
        // [2] Sanitize the value that was input by the user
        const sanitizedUserInput = userInput.toLowerCase().replaceAll(" ", "_");
        // [3] Call the create order function with the sanitized input as its argument
        createOrder(sanitizedUserInput);
    };
    // If the event target id is equal to "complete order button", we:
    if (e.target.id === 'complete-order-button') {
        // Prevent default refresh behaviour
        e.preventDefault();
        // 1] Retrieve the value of the element with the "mark-as-complete-number" id and store it to a variable called userInput
        const userInput = document.getElementById('mark-as-complete-number').value;
        // [2] Call the mark as complete function with userInput as its argument
        markAsComplete(userInput)
    }
});