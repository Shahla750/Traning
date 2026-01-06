var cart = [];
var editIndex = -1;

// calculate amount
function findAmount() {
    let qty = parseInt(document.getElementById("qty").value) || 0;
    let price = parseInt(document.getElementById("price").value) || 0;
    document.getElementById("amount").value = qty * price;
}

// add item normally from textboxes
function addItem() {

    let name = document.getElementById("name").value;
    let qty = parseInt(document.getElementById("qty").value);
    let price = parseInt(document.getElementById("price").value);

   

    let amount = qty * price;

    let product = { name: name, qty: qty, price: price, amount: amount };
    cart.push(product);

    clearForm();
    displayCart();
}

// clear form and reset mode
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";

    // make all fields editable again
    document.getElementById("name").readOnly = false;
    document.getElementById("price").readOnly = false;

    document.getElementById("addBtn").style.display = "inline-block";
    document.getElementById("updateBtn").style.display = "none";

    editIndex = -1;
}

// delete item
function deleteItem(index) {
    cart.splice(index, 1);
    displayCart();
}

// edit → only qty change allowed
function editItem(index) {

    editIndex = index;
    let prod = cart[index];

    document.getElementById("name").value = prod.name;
    document.getElementById("qty").value = prod.qty;
    document.getElementById("price").value = prod.price;
    document.getElementById("amount").value = prod.amount;

    // lock name & price
    document.getElementById("name").readOnly = true;
    document.getElementById("price").readOnly = true;

    // qty editable
    document.getElementById("qty").readOnly = false;

    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "inline-block";
}

// update quantity only
function updateQty() {

    let newQty = parseInt(document.getElementById("qty").value);

    if (newQty <= 0) {
        alert("Quantity must be greater than 0");
        return;
    }

    let prod = cart[editIndex];

    prod.qty = newQty;
    prod.amount = prod.qty * prod.price;

    clearForm();
    displayCart();
}

// display table
function displayCart() {

    let rows = "";

    cart.forEach((prod, index) => {
        rows += `
        <tr>
            <td>${prod.name}</td>
            <td>${prod.qty}</td>
            <td>${prod.price}</td>
            <td>${prod.amount}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>

                <button class="btn btn-sm"
                        style="background-color: orange; color:white; border:none;"
                        onclick="editItem(${index})">
                    Edit 
                </button>
            </td>
        </tr>`;
    });

    let total = cart.reduce((sum, p) => sum + p.amount, 0);

    document.getElementById("scart").innerHTML = `
    <table class="table table-bordered mt-3">
        <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
        ${rows}
        <tr>
            <th colspan="3">Total</th>
            <th colspan="2">${total}</th>
        </tr>
    </table>`;
}