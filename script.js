document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector(".input-section input");
    const addTaskButton = document.querySelector(".add-task-button");
    const todosList = document.querySelector(".todos-list-body");
    const deleteAllButton = document.querySelector(".delete-all-btn");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${taskText}</td>
                <td></td> <!-- You can add due date here -->
                <td>Pending</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-success btn-sm">Complete</button>
                    <button class="btn btn-error btn-sm">Delete</button>
                </td>
            `;

            todosList.appendChild(newRow);
            taskInput.value = "";
        }
    });

    // Function to delete a task
    todosList.addEventListener("click", function (e) {
        if (e.target && e.target.matches("button.btn-error")) {
            const row = e.target.closest("tr");
            row.remove();
        }
    });

    // Function to delete all tasks
    deleteAllButton.addEventListener("click", function () {
        todosList.innerHTML = "";
    });

    // Select the theme switcher buttons
    const themeButtons = document.querySelectorAll(".theme-item");

    // Function to change the theme
    function changeTheme(theme) {
        // Remove existing theme classes
        document.body.classList.remove(
            "cupcake",
            "dark",
            "light",
            "bumblebee",
            "synthwave",
            "halloween",
            "fantasy",
            "dracula",
            "aqua",
            "luxury",
            "night"
        );

        // Add the selected theme class
        document.body.classList.add(theme);
    }

    // Add click event listeners to theme buttons
    themeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const selectedTheme = button.getAttribute("theme");
            changeTheme(selectedTheme);
        });
    });

    // Function to filter tasks
    function filterTasks(status) {
        const taskRows = document.querySelectorAll(".todos-list-body tr");

        taskRows.forEach((row) => {
            const taskStatus = row.querySelector("td:nth-child(3)").textContent;

            if (status === "all" || taskStatus.toLowerCase() === status.toLowerCase()) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    }

    // Add click event listeners to filter buttons
    document.querySelector(".filter-button-all").addEventListener("click", function () {
        filterTasks("all");
    });

    document.querySelector(".filter-button-pending").addEventListener("click", function () {
        filterTasks("Pending");
    });

    document.querySelector(".filter-button-completed").addEventListener("click", function () {
        filterTasks("Completed");
    });

    function filterTasks(status) {
        const taskRows = document.querySelectorAll(".todos-list-body tr");
    
        taskRows.forEach((row) => {
            const taskStatus = row.querySelector("td:nth-child(3)").textContent;
    
            if (status === "all" || taskStatus.toLowerCase() === status.toLowerCase()) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    }
    

    // Function to handle editing a task
function editTask(row) {
    const taskText = row.querySelector("td:first-child").textContent;
    const newText = prompt("Edit task:", taskText);

    if (newText !== null && newText.trim() !== "") {
        row.querySelector("td:first-child").textContent = newText.trim();
    }
}

// Function to handle marking a task as completed
function completeTask(row) {
    row.querySelector("td:nth-child(3)").textContent = "Completed";
}

// Add event listeners for Edit and Complete buttons
todosList.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".btn-warning")) {
        editTask(e.target.closest("tr"));
    } else if (e.target && e.target.matches(".btn-success")) {
        completeTask(e.target.closest("tr"));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the theme switcher buttons
    const themeButtons = document.querySelectorAll(".theme-item");

    // Function to change the theme
    function changeTheme(theme) {
        // Remove existing theme classes
        document.body.classList.remove(
            "cupcake",
            "dark",
            "light",
            "bumblebee",
            "synthwave",
            "halloween",
            "fantasy",
            "dracula",
            "aqua",
            "luxury",
            "night"
        );

        // Add the selected theme class
        document.body.classList.add(theme);
    }

    // Add click event listeners to theme buttons
    themeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const selectedTheme = button.getAttribute("theme");
            changeTheme(selectedTheme);
        });
    });
});

});
