function submitForm() {
    // Collect form data
    const formData = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        Date_of_Birth: document.getElementById("dob").value,
        religion: document.getElementById("religion").value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        hobbies: [],
        address: document.getElementById("address").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    // Collect hobbies
    document.querySelectorAll('input[name="hobbies"]:checked').forEach(function (checkbox) {
        formData.hobbies.push(checkbox.value);
    });

    // Display the "Submitted Data" header and the table
    const header = document.getElementById("submittedDataHeader");
    const dataTable = document.getElementById("dataTable");
    const tbody = dataTable.querySelector("tbody");
    tbody.innerHTML = ""; // Clear any existing data in the table

    // Show the header and table
    header.style.display = "block";
    dataTable.style.display = "table";

    // Loop through the form data and insert rows into the table
    for (const key in formData) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");

        cell1.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        if (Array.isArray(formData[key])) {
            cell2.textContent = formData[key].join(", ");
        } else {
            cell2.textContent = formData[key];
        }

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }
}

function resetForm() {
    // Clear the table when reset is clicked
    const header = document.getElementById("submittedDataHeader");
    const dataTable = document.getElementById("dataTable");

    // Hide the "Submitted Data" header and the table
    header.style.display = "none";
    dataTable.style.display = "none";
}