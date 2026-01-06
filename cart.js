var cart = [];

function findAmount() {
    let qty = parseInt(document.getElementById("qty").value) ;
    let price = parseInt(document.getElementById("price").value) ;
   let  total_ammount=qty * price;
   document.getElementById("amount").value=total_ammount;
}

function addItem() {
    //read input fields
    let name = document.getElementById("name").value;
    let qty = parseInt(document.getElementById("qty").value);
    let price = parseInt(document.getElementById("price").value);
    let amount = parseInt(document.getElementById("amount").value);

    

    let product = { name, qty, price, amount };//create object of read input
    cart.push(product);

    clearInputs();
    displayCart();
}

function displayCart() {
    let cart_rows = "";

    //loops through each product in cart
    cart.forEach((prod, index) => {
        cart_rows += `
            <tr>
                <td>${prod.name}</td>
                <td>${prod.qty}</td>
                <td>${prod.price}</td>
                <td>${prod.amount}</td>
                <td>
                 <button class="btn btn-warning btn-sm" onclick="editItem(${index})">
                        Edit
                    </button>
                    <button class="btn btn-danger btn-sm"
                        onclick="deleteItem(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    let totalAmount = cart.reduce((sum, prod) =>
         sum + prod.amount, 0);

    let table = `
        <table class="table table-bordered">
            <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Delete</th>
            </tr>
            ${cart_rows}
            <tr>
                <th colspan="3">Total</th>
                <th>${totalAmount}</th>
                <th></th>
            </tr>
        </table>
    `;

    document.getElementById("scart").innerHTML = table;
}

function deleteItem(index) {
    cart.splice(index, 1); // remove item
    displayCart();         // refresh table
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";
}
