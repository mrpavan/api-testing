var button = document.querySelector("#btn");
var responseContainer = document.querySelector("#response-container");
var apiUrlInput = document.querySelector("#api-url");
var authTokenInput = document.querySelector("#auth-token"); // Get the authToken input field

function onClick() {
    var apiUrl = apiUrlInput.value;
    var authToken = authTokenInput.value;

    if (!apiUrl) {
        responseContainer.innerHTML = "Please enter an API URL.";
        return;
    }

    var headers = new Headers({
        "Authorization": authToken,
        // "Authorization": "Bearer " + authToken,
        "Content-Type": "application/json",
    });

    fetch(apiUrl, { 
        method: "GET",
        headers: headers,
    })
        .then((response) => response.json())
        .then((json) => {
            responseContainer.innerHTML = ""; // Clear previous content

            var pre = document.createElement("pre");
            pre.textContent = JSON.stringify(json, null, 2);

            responseContainer.appendChild(pre);

            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((error) => {
            responseContainer.innerHTML = "Error: " + error.message;
        });
}

button.addEventListener("click", onClick);
