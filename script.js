// array to store regiered users
const users = [];

// Helper function to display error messages
function displayError(message) {
    document.getElementById("errorMessage").textContent = message;
}

// Helper function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Form validation and registration logic
document.getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // prevent form submission

        //get form values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value

        // validation checks
        if(username === ""||email ===""||password===""){
            displayError("all fields are required.")
            return;
        }
        
        if(!validateEmail(email)){
            displayError("Invalid email format.")
            return;
        }

        if(password.length<6){
            displayError("Password must be at leastt 6 characters.")
            return;
        }

        //add the user to the array
        users.push({username, email,});

        //clear errors
        displayError("");
        document.getElementById("registrationForm").reset()
        alert("Registration successful!")
        updateUserList()
    }

)
// Function to display the list of registered users
function updateUserList() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear the current list

    users.forEach((user, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${user.username} (${user.email})`;
        userList.appendChild(listItem);
    });
}
