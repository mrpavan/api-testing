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
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
        // "User-Agent": "curl/8.1.2"
    });

    // Check if authToken is not empty before appending the Authorization header
    if (authToken.trim() !== "") {
    headers.append("Authorization", authToken);
    }

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
