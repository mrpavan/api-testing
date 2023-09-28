# API Testing with JavaScript and Fetch

This repository contains a simple JavaScript application for testing APIs using the Fetch API. With this application, you can make GET requests to APIs, including optional Bearer token-based authentication, and view the responses in a user-friendly format.

## Features

- Make GET requests to any API by providing the API URL.
- Optionally include a Bearer token for authentication.
- View the API response in a well-formatted JSON format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- A web browser with JavaScript enabled.
- An API URL you want to test.
- (Optional) A Bearer token for authentication if the API requires it.

## Usage

1. Clone or download this repository to your local machine.
    ```
    git clone https://github.com/mrpavan/api-testing.git
    cd your-destination-folder
    npm install # installing the dependencies
    npm start 
    ```

2. Open the `localhost:3000` in your web browser.

3. In the web application:
   - Enter the API URL in the "API URL" input field.
   - (Optional) If the API requires authentication, select "Bearer" from the "Authentication Method" dropdown and enter the Bearer token in the "Authorization Token" input field.
   - Click the "Fetch Data from the API" button to make the GET request.

4. The API response will be displayed below in a well-formatted JSON format. If an error occurs, it will be shown as well.

5. You can click the button again to make additional API requests.

## Examples

Here are some example scenarios where this API testing tool can be useful:

- Testing public APIs without authentication: Simply enter the API URL and click to view the response.

- Testing authenticated APIs: Select "Bearer" as the authentication method and provide the Bearer token.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This application uses the 

- Fetch API for making HTTP requests.
- [Parcel](https://en.parceljs.org/) web application bundler 
- Node v16.x

