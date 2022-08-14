const sidebar = document.querySelector(".navbar");
const content = document.querySelector(".content");
const imageElements = document.querySelectorAll(".m-2")
const button = document.querySelector(".button")
const buttonForInput = document.getElementById("buttonForInput")

// hover effect
sidebar.onmouseover = function () {
    sidebar.style.width = "200px"
    content.style.marginLeft = "200px"
}

sidebar.onmouseout = function () {
    sidebar.style.width = "82px"
    content.style.marginLeft = "100px"
}
// modal button effect 
document.getElementById("button-modal").addEventListener('click', function () {
    document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "none";
});

var counter = 3;

buttonForInput.onclick = function () {
    let userInputFirstName = document.getElementById("firstNameInput").value;
    let userInputLastName = document.getElementById("lastNameInput").value;
    let userHandleInput = document.getElementById("handleInput").value;
    const tableBody =document.getElementById("tableBody")
    counter++
    let newArray = [counter, userInputFirstName, userInputLastName, userHandleInput]
    let newTableRow = document.createElement("tr")
    

    for (const element of newArray) {
        let newTableData = document.createElement("td")
        newTableData.append(element)
        newTableRow.append(newTableData)
        tableBody.append(newTableRow)
    }
    const table = document.querySelector(".table")
    table.append(tableBody)
    console.log(table)

    document.querySelector(".bg-modal").style.display = "none ";
}


buttonForInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        buttonForInput.click();
    }
});