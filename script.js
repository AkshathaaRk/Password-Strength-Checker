const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const hideShowBtn = document.querySelector(".hideShowBtn");
const container = document.querySelector(".container"); // Select the container

// Regular expressions for password strength
let regExpWeak = /[a-z]/; // Lowercase letters
let regExpMedium = /\d+/; // Numbers
let regExpStrong = /.[!@#$%^&()?_~-]/; // Special characters
let regExpUppercase = /[A-Z]/; // Uppercase letters
let level = 0;

function trigger() {
    if (input.value !== "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";

        if (
            input.value.match(regExpWeak) ||
            input.value.match(regExpMedium) ||
            input.value.match(regExpStrong) ||
            input.value.match(regExpUppercase)
        )
            level = 1;

        if (
            (input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
            (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
            (input.value.match(regExpWeak) && input.value.match(regExpStrong)) ||
            (input.value.match(regExpWeak) && input.value.match(regExpUppercase)) ||
            (input.value.match(regExpMedium) && input.value.match(regExpUppercase)) ||
            (input.value.match(regExpStrong) && input.value.match(regExpUppercase))
        )
            level = 2;

        if (
            input.value.match(regExpWeak) &&
            input.value.match(regExpMedium) &&
            input.value.match(regExpStrong) &&
            input.value.match(regExpUppercase)
        )
            level = 3;

        if (level === 1) {
            weak.classList.add("active");
            medium.classList.remove("active");
            strong.classList.remove("active");
            text.style.display = "block";
            text.textContent = "Your password is too weak";
            text.classList.add("weak");
            container.style.backgroundColor = "#f8d7da"; // Weak password color
        }

        if (level === 2) {
            medium.classList.add("active");
            strong.classList.remove("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
            container.style.backgroundColor = "#fff3cd"; // Medium password color
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }

        if (level === 3) {
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
            container.style.backgroundColor = "#d4edda"; // Strong password color
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }

        hideShowBtn.style.display = "block";
        hideShowBtn.onclick = function () {
            if (input.type === "password") {
                input.type = "text";
                hideShowBtn.innerHTML='<i class="fa-solid fa-eye-slash"></i>';
            } else {
                input.type = "password";
                hideShowBtn.innerHTML='<i class="fa-solid fa-eye"></i>';
            }
        };
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
        hideShowBtn.style.display = "none";
        container.style.backgroundColor = "#fff"; // Reset to default color
    }
}

function suggestStrongPassword() {
    // Array of password suggestions
    const passwordSuggestions = [
        "Pass@1234",
        "Secure#5678",
        "Strong!91011",
        "Alpha$1213",
        "Beta*1415",
        "Gamma%1617",
        "Delta&1819",
        "Omega(2021",
        "Zeta!2223",
        "Sigma@2425"
    ];

    if (input.value === "") {
        // Check if the message box already exists and remove it
        const existingMessageBox = document.querySelector(".message-box");
        if (existingMessageBox) {
            existingMessageBox.remove();
        }

        // Randomly select a password from the suggestions array
        const randomPassword =
            passwordSuggestions[Math.floor(Math.random() * passwordSuggestions.length)];

        // Create the message box
        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box");
        messageBox.style.marginTop = "20px";
        messageBox.style.padding = "15px";
        messageBox.style.border = "1px solid #ccc";
        messageBox.style.borderRadius = "5px";
        messageBox.style.backgroundColor = "#f9f9f9";
        messageBox.style.textAlign = "center";
        messageBox.style.width = "90%";
        messageBox.style.maxWidth = "400px";
        messageBox.style.margin = "20px auto";

        // Add the suggested password text
        const messageText = document.createElement("p");
        messageText.textContent = 'Suggested strong password: ${randomPassword}';
        messageText.style.marginBottom = "10px";
        messageBox.appendChild(messageText);

        // Add the "Use My Password" button
        const usePasswordButton = document.createElement("button");
        usePasswordButton.textContent = "Use My Password";
        usePasswordButton.style.marginRight = "10px";
        usePasswordButton.style.padding = "5px 10px";
        usePasswordButton.style.border = "none";
        usePasswordButton.style.backgroundColor = "#28a745";
        usePasswordButton.style.color = "#fff";
        usePasswordButton.style.borderRadius = "5px";
        usePasswordButton.style.cursor = "pointer";

        usePasswordButton.addEventListener("click", () => {
            input.value = randomPassword; // Set the password in the input field
            trigger(); // Trigger password strength validation
        });
        messageBox.appendChild(usePasswordButton);

        // Add the "Close" button
        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.padding = "5px 10px";
        closeButton.style.border = "none";
        closeButton.style.backgroundColor = "#dc3545";
        closeButton.style.color = "#fff";
        closeButton.style.borderRadius = "5px";
        closeButton.style.cursor = "pointer";

        closeButton.addEventListener("click", () => {
            messageBox.remove(); // Remove the message box
        });
        messageBox.appendChild(closeButton);

        // Append the message box below the container
        container.insertAdjacentElement("afterend", messageBox);
    }
}

input.addEventListener("click", suggestStrongPassword);