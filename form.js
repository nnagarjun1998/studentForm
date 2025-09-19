function getValue() {
    var inputDetails = document.querySelectorAll(".details");
    var newRow = document.createElement("tr"); // Create a new row for the data
    var deleteCell = document.createElement("td"); // Create the delete button cell
    var deleteButton = document.createElement("button"); // Create the delete button

    deleteButton.textContent = "Delete"; // Set the button text

    // Loop through all input fields and append their values to the new row
    for (let count = 0; count < inputDetails.length; count++) {
        var input = inputDetails[count];
        // Create a new <td> for each field

        if (input.type === "radio") {
            // If it's a radio button, check if one is selected
            if (input.checked) {
                var newCell = document.createElement("td"); 
                newCell.textContent = input.value;
                 // Append "Male" or "Female" based on the selected radio
            }
        } else {
            var newCell = document.createElement("td"); 
            console.log(input.value);
            newCell.textContent = input.value;
            console.log(input.value) // For non-radio fields, append their value
        }

        newRow.appendChild(newCell); // Append each new cell to the row
    }

    // Add the delete button to the last cell of the row
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell); // Append the delete cell to the row

    // Append the new row to the table body
    document.querySelector("#body").appendChild(newRow);

    // Attach delete button functionality
    deleteButton.onclick = function (event) {
        delButton(event);
    };

}

// Function to delete the row when the delete button is clicked
function delButton(event) {
    event.target.closest('tr').remove(); // Find the closest row (<tr>) and remove it
}
