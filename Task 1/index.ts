import inquirer from "inquirer";

// Program to simulate the shopping scenario
async function shoppingSimulation() {
    let totalBill = 0;

    console.log("Welcome to the supermarket!");

    // Scenario 1 - Buying Groceries
    while (true) {
        const { choice } = await inquirer.prompt({
            type: 'number',
            name: 'choice',
            message: 'Do you want to buy fruits or vegetables? (Type 1 for \'fruits\' or 2 for \'vegetables\' or 3 to finish)',
        });

        if (choice === 1) {
            console.log("Available fruits: 1. Apple Rs200/kg , 2. Banana Rs200/Dozen, 3. Orange Rs200/Dozen");
            const { fruit, quantityInput } = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'fruit',
                    message: 'Enter the number of fruit you want to buy:',
                },
                {
                    type: 'number',
                    name: 'quantityInput',
                    message: 'Enter the quantity:',
                },
            ]);

            const quantity = parseInt(quantityInput || "0", 10);
            totalBill += quantity * 200;
        } else if (choice === 2) {
            console.log("Available vegetables: 1. Carrot Rs100/kg, 2. Potato Rs100/kg , 3. Onion Rs100/kg");
            const { vegetable, quantityInput } = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'vegetable',
                    message: 'Enter the Number of vegetable you want to buy:',
                },
                {
                    type: 'number',
                    name: 'quantityInput',
                    message: 'Enter the quantity:',
                },
            ]);

            const quantity = parseInt(quantityInput || "0", 10);
            totalBill += quantity * 100;
        } else if (choice === 3) {
            break; // Finish shopping
        } else {
            console.log("Invalid choice. (Type 1 for 'fruits' or 2 for 'vegetables' or 3 to finish).");
        }
    }

    // Scenario 2 - Checking Discounts
    if (totalBill >= 1000) {
        console.log("You buy more than Rs1000 that's why you qualify for a 20% discount!");
        totalBill *= 0.8; // Apply 20% discount
        console.log(`Discounted Total: Rs${totalBill}`);
    }

    // Scenario 3 - Checkout Process
    console.log("Proceed to checkout...");

    let paymentMethod;
    while (true) {
        const { paymentMethod: paymentMethodInput } = await inquirer.prompt({
            type: 'input',
            name: 'paymentMethod',
            message: 'Select a payment method by typing 1 for bank credit/debit and 2 for cash on delivery?',
        });

        if (parseInt(paymentMethodInput) === 1 || parseInt(paymentMethodInput) === 2) {
            break; // Valid payment method chosen
        } else {
            console.log("Invalid payment method. (Please enter '1' for bank credit/debit and '2' for cash on delivery)");
        }
    }

    console.log(`Payment confirmed. Thank you for shopping with us!`);
}

// Run the shopping simulation
shoppingSimulation();
