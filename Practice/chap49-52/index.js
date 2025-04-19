// Question # 1

function signupForm() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(email, password);
}

// Question # 2

let paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi illo saepe voluptates. Ipsam, nostrum asperiores eligendi ea eius atque nesat, eum suscipit? Ratione illo doloribus quo ducimus doloremque numquam maiores ad modi.";
let lessPara = paragraph.slice(0, 20);
let isExpanded = false;
let readMoreBtn = document.getElementById("readMoreBtn");

function readMore() {
  let content = document.getElementById("readMore");
  if (!isExpanded) {
    content.innerHTML = lessPara + "...";
    readMoreBtn.innerHTML = "Read More";
  } else {
    content.innerHTML = paragraph;
    readMoreBtn.innerHTML = "Read Less";
  }

  isExpanded = !isExpanded;
}
readMore();

readMoreBtn.addEventListener("click", readMore);

// Question # 3

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.querySelector("#studentTable tbody");
const editForm = document.getElementById("editForm");

let currentRow = null;

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const studentClass = document.getElementById("class").value;

  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${studentClass}</td>
      <td>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </td>
    `;

  studentTableBody.appendChild(row);
  studentForm.reset();
});

studentTableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("tr").remove();
  }

  if (e.target.classList.contains("editBtn")) {
    currentRow = e.target.closest("tr");

    document.getElementById("editName").value = currentRow.cells[0].textContent;
    document.getElementById("editAge").value = currentRow.cells[1].textContent;
    document.getElementById("editClass").value =
      currentRow.cells[2].textContent;

    editForm.style.display = "block";
  }
});

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  currentRow.cells[0].textContent = document.getElementById("editName").value;
  currentRow.cells[1].textContent = document.getElementById("editAge").value;
  currentRow.cells[2].textContent = document.getElementById("editClass").value;

  editForm.style.display = "none";
  currentRow = null;
  editForm.reset();
});
