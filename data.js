const people = [
    { name: "Ahmed",   age: 22, city: "Cairo" },
    { name: "Sara",    age: 19, city: "Giza" },
    { name: "Omar",    age: 25, city: "Alexandria" },
    { name: "Mona",    age: 21, city: "Cairo" },
    { name: "Youssef", age: 30, city: "Mansoura" },
    { name: "Laila",   age: 27, city: "Giza" },
    { name: "Khaled",  age: 18, city: "Aswan" },
    { name: "Nour",    age: 23, city: "Tanta" }
];

let currentData = [...people];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("noResults");

function renderTable(data) {
    tableBody.innerHTML = "";
    noResults.hidden = data.length !== 0;

    data.forEach(function (person) {
        const row = document.createElement("tr");
        ["name", "age", "city"].forEach(function (key) {
            const cell = document.createElement("td");
            cell.textContent = person[key];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}


searchInput.addEventListener("input", function () {
    const term = searchInput.value.trim().toLowerCase();
    currentData = people.filter(function (p) {
        return p.name.toLowerCase().includes(term) ||
               String(p.age).includes(term) ||
               p.city.toLowerCase().includes(term);
    });
    renderTable(currentData);
});


document.getElementById("sortName").addEventListener("click", function () {
    currentData.sort(function (a, b) { return a.name.localeCompare(b.name); });
    renderTable(currentData);
});

document.getElementById("sortAge").addEventListener("click", function () {
    currentData.sort(function (a, b) { return a.age - b.age; });
    renderTable(currentData);
});

renderTable(currentData);