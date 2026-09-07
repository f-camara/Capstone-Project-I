const displayOrders = () => {
    // Retrieval of existing saved data
    let existingOrderList = JSON.parse(sessionStorage.getItem('orderList'));
    // Retrieve the elements with the "incomplete-orders-tbody" and "complete-orders-tbody" ids and store them to variables
    const incompleteOrdersSection = document.getElementById('incomplete-orders-tbody')
    const completeOrdersSection = document.getElementById('complete-orders-tbody');
    // Clear the innerHTML of the incomplete and complete orders sections to avoid any duplication
    incompleteOrdersSection.innerHTML = "";
    completeOrdersSection.innerHTML = "";
    // Loop through the existing order list
    for (const order of existingOrderList) {
        // If the order status of the current order is "incomplete", we:
        if (order.orderStatus === 'incomplete') {
            // [1] Create a new table row element and store it to a variable called incompleteIndividualOrder
            const incompleteIndividualOrder = document.createElement('tr');
            // [2] Set the class name of the new table row element to "individualOrder"
            incompleteIndividualOrder.className = "individualOrder";
            // [3] Set the innerHTML of the new table row element to include the order number, meal name, and order status
            incompleteIndividualOrder.innerHTML = `
                        <td>${order.orderNum}</td>
                        <td>${order.strMeal}</td>
                        <td>${order.orderStatus}</td>          
            `
            // [4] Append the new table row element to the incomplete orders section
            incompleteOrdersSection.appendChild(incompleteIndividualOrder);
        }
        // Else if the order status of the current order is "complete", we:
        else if (order.orderStatus === 'complete') {
            // [1] Create a new table row element and store it to a variable called completeIndividualOrder
            const completeIndividualOrder = document.createElement('tr');
            // [2] Set the class name of the new table row element to "individualOrder"
            completeIndividualOrder.className = "individualOrder";
            // [3] Set the innerHTML of the new table row element to include the order number, meal name, and order status
            completeIndividualOrder.innerHTML = `
                        <td>${order.orderNum}</td>
                        <td>${order.strMeal}</td>
                        <td>${order.orderStatus}</td>              
            `
            // [4] Append the new table row element to the complete orders section
            completeOrdersSection.appendChild(completeIndividualOrder);
        }
    };
}

export default displayOrders;