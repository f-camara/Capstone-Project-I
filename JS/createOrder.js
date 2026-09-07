import displayOrders from "./displayOrders.js";

const createOrder = async (sanitizedUserInput) => {
    // Retrieval of existing saved data
    let existingOrderList = JSON.parse(sessionStorage.getItem('orderList'));
    let existingOrderNumber = JSON.parse(sessionStorage.getItem('orderNumber'));
    // Fetching data from the API based on the sanitized user input
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${sanitizedUserInput}`);
    // Parsing the response to JSON format
    const parsedResponse = await response.json();
    // If the parsed response has a "meals" property that is not null, we:
    if (parsedResponse.meals !== null) {
        // [1] Retrieve the keys of the "meals" object and store them to a variable called keys;
        const keys = Object.keys(parsedResponse.meals);
        // [2] Generate a random number based on the amount of keys retrieved;
        const randomNumber = Math.floor(Math.random() * keys.length);
        // [3] Use the random number to select an index of the nested objects;
        const selectedItem = parsedResponse.meals[randomNumber];
        // [4] Increment the existing order number by 1;
        existingOrderNumber += 1;
        // [5] Create a new object which includes the order number and order status;
        const selectedItemDetails = {
            orderNum: existingOrderNumber,
            orderStatus: 'incomplete'
        };
        // [6] Merge the retrieved API object with the aforementioned object - selectedItemDetails;
        const finalOrderItem = Object.assign(selectedItemDetails, selectedItem);
        // [7] Push the merged object to the existing order list;
        existingOrderList.push(finalOrderItem);
        // [8] Update the session storage with the new order list;
        sessionStorage.setItem('orderList', JSON.stringify(existingOrderList));
        // [9] Update the session storage with the new order number;
        sessionStorage.setItem('orderNumber', JSON.stringify(existingOrderNumber));
        // [10] Call the displayOrders function to update the front-end with the new order;
        displayOrders()
    }
    else {
        // Else if parsedResponse.meals is null, we alert the user that there are no recipes with the given ingredient.
        alert(`There aren't any recipe's with this ingredient, please choose another ingredient`)
    }
}

export default createOrder;