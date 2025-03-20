document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("#studentTable tbody");

    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>Rahul</td>
        <td>22</td>
        <td>IT</td>
    `;
    tableBody.appendChild(newRow);
});
