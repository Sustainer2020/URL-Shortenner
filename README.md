# DarkURL Web Application

DarkURL is a powerful web application that allows users to shorten long URLs and manage them conveniently. With its user-friendly interface and robust functionality, DarkURL simplifies the process of creating and tracking shortened URLs. This document provides a comprehensive overview of the project, including the tech stack used, project structure, models schema, views, and key features.

## Table of Contents

**Table of Contents**
**Tech Stack Used**
**Project Structure**
**Models**
**Views**
**Bootstrap and Enhanced UI**
**JavaScript Copy to Clipboard Button**
**Key Takeaways**
**Documentation References**

## Tech Stack Used

The DarkURL web application leverages a wide range of cutting-edge technologies to deliver an exceptional user experience. The tech stack used in this project includes:

-   **HTML**: The HyperText Markup Language, the standard markup language for creating web pages. HTML provides the structure and content of the web application.

-   **CSS**: Cascading Style Sheets, the style sheet language used for defining the visual presentation of web pages. CSS is responsible for the layout, colors, fonts, and overall aesthetic appeal of the application.

-   **Bootstrap**: A popular CSS framework that offers a collection of pre-designed components, layouts, and styles. Bootstrap simplifies the process of building responsive and visually appealing web pages.

-   **JavaScript**: A versatile programming language used to add interactivity and dynamic behavior to web pages. JavaScript enhances the user experience by enabling client-side functionality such as form validation, event handling, and asynchronous communication with the server.

-   **Node.js**: A powerful JavaScript runtime environment that enables server-side execution of JavaScript code. Node.js provides a scalable and efficient platform for building network applications, including web servers.

-   **Express.js**: A fast and minimalist web application framework for Node.js. Express.js simplifies the development of server-side applications by providing a robust set of features for routing, middleware, and handling HTTP requests and responses.

-   **MongoDB**: A popular NoSQL database system that offers scalability, flexibility, and high performance. MongoDB stores the application's data, such as shortened URLs and user information, in a document-oriented format.

-   **Azure**: A leading cloud computing platform that provides a wide range of services for hosting, deploying, and scaling applications. Azure offers a reliable and secure infrastructure for running web applications, ensuring high availability and fault tolerance.

## Project Structure

The DarkURL web application follows a well-organized folder structure, promoting maintainability and modularity. Here's an overview of the project structure:

-   **config**: This folder contains the configuration files for the application, including the `database.js` file, which specifies the database connection settings.

-   **models**: The `models` folder contains the data models used in the application. It includes the `url.js` and `user.js` files, which define the schemas for storing shortened URLs and user information, respectively. These models define the structure and behavior of the data stored in the MongoDB database.

-   **public**: The `public` folder stores static assets required by the application, such as CSS stylesheets, images, and client-side JavaScript files. It includes a subfolder named `style`, which contains the `style.css` file responsible for custom styling.

-   **routes**: The `routes` folder contains the route handlers for different URLs in the application. It includes the `index.js` and `user.js` files, which define the URL patterns and corresponding controller functions for handling HTTP requests related to URL management and user authentication.

-   **views**: The `views` folder holds the EJS (Embedded JavaScript) templates used to render the HTML pages. It includes the following views:

    -   `history.ejs`: This view provides users with a comprehensive history of their shortened URLs. It displays details such as the original URL, the corresponding shortened URL, and usage statistics like the number of visits.

    -   `login.ejs`: The login view presents users with a form to authenticate themselves and access their account. It includes input fields for email and password

, along with a login button.

-   `signup.ejs`: The signup view displays a registration form for users to create a new account. It prompts users to provide their username, email, password, and confirm password.

-   `index.ejs`: The index view serves as the homepage of the application. It allows users to enter a long URL and generate a shortened URL. The view presents a form with an input field for the long URL and a submit button.

## Models

The DarkURL web application employs two essential models to manage data effectively:

-   **URL Model (`url.js`)**: This model defines the schema for storing shortened URLs in the MongoDB database. It consists of the following fields:

    -   `originalUrl`: The original long URL provided by the user.
    -   `shortUrl`: The generated shortened URL.
    -   `clicks`: The number of times the shortened URL has been clicked.

    The URL model enables the application to track URL usage statistics and provide users with detailed information about their shortened URLs.

-   **User Model (`user.js`)**: The user model defines the schema for storing user information in the MongoDB database. It includes the following fields:

    -   `name`: The name of the user.
    -   `email`: The email address of the user.
    -   `password`: The hashed password of the user.

    The user model allows the application to securely store user credentials and facilitate user authentication and authorization.

## Views

The DarkURL web application features four distinct views, each serving a specific purpose and providing users with a seamless browsing experience:

-   **History View (`history.ejs`)**: This view offers users a comprehensive overview of their shortened URLs. It presents a user-friendly interface that displays details such as the original URL, corresponding shortened URL, and usage statistics like the number of clicks. Users can easily track and manage their URLs in this centralized location.

-   **Login View (`login.ejs`)**: The login view provides users with a straightforward form to authenticate themselves and access their account. It includes input fields for email and password, along with a login button. Users can securely log in to the application and enjoy personalized features.

-   **Signup View (`signup.ejs`)**: The signup view offers a user-friendly registration form for individuals who wish to create a new account. It prompts users to provide their desired username, email, password, and confirm password. Upon successful registration, users gain access to the full functionality of the application.

-   **Home View (`index.ejs`)**: The home view serves as the application's landing page. It presents users with a form to enter a long URL that they want to shorten. The view includes an input field for the long URL and a submit button. Users can conveniently generate shortened URLs and manage them through the other views.

These views are carefully designed using Bootstrap, ensuring a visually appealing and responsive user interface. They incorporate form validation to enhance data integrity and provide users with real-time feedback. Flash messages are also implemented to communicate form errors and successful login attempts effectively.

## Bootstrap and Enhanced UI

The DarkURL web application utilizes the Bootstrap CSS framework to create a visually appealing and responsive user interface. Bootstrap offers a wide range of pre-designed components, such as buttons, forms, navigation bars, and grids, that enhance the overall look and feel of the application. By leveraging Bootstrap's responsive grid system, the application seamlessly adapts to different screen sizes and devices, providing a consistent and optimized experience for users on desktops, tablets, and smartphones.

The use of Bootstrap ensures that the web application is aesthetically pleasing and user-friendly, allowing users to navigate and interact with the interface effortlessly.

## JavaScript Copy to Clipboard Button

To enhance user convenience, the DarkURL web application includes a JavaScript-based "Copy to

Clipboard" button. This button allows users to quickly copy the shortened URL to their clipboard with a single click, eliminating the need for manual selection and copying. The JavaScript code binds an event listener to the button, triggering the copy functionality when clicked. This feature streamlines the process of sharing shortened URLs with others, improving usability and saving users valuable time.

## Key Takeaways

-   Comprehensive Tech Stack: HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB, and Azure.
-   Structured Project Organization: Well-organized directory structure for easy navigation and maintenance.
-   Powerful Data Models: URL and User models for efficient data storage and retrieval.
-   Interactive Views: History, Login, Signup, and Home views for seamless user experience.
-   Bootstrap and Enhanced UI: Visually appealing and responsive user interface with Bootstrap.
-   Efficient URL Sharing with Copy to Clipboard: Simplified sharing of shortened URLs with a "Copy to Clipboard" button.

Overall, the DarkURL web application is an innovative and feature-rich solution that empowers users to simplify URL management and tracking, making it an ideal choice for individuals and businesses alike.

## Documentation References

To further explore the technologies and concepts used in the development of the DarkURL web application, consider referring to the following documentation:

-   HTML: [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   CSS: [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   Bootstrap: [Bootstrap Documentation](https://getbootstrap.com/docs/)
-   JavaScript: [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   Node.js: [Node.js Documentation](https://nodejs.org/en/docs/)
-   Express.js: [Express.js Documentation](https://expressjs.com/)
-   MongoDB: [MongoDB Documentation](https://docs.mongodb.com/)
-   Azure: [Azure Documentation](https://docs.microsoft.com/azure/)

These resources provide in-depth explanations, tutorials, and examples to deepen your understanding of the technologies used in the project.
