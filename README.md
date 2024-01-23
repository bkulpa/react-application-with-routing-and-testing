# React Application with Routing and Testing

## Overview

This React application, developed by Bartosz Kulpa, demonstrates a multi-page web application with routing and unit testing. The application includes pages for Home, About, Projects, and Contact, along with a Header and Footer component. It utilizes React Router for navigation and React Testing Library for unit testing.

## Features

### Pages and Components

- **Home (`Home.tsx`)**: Displays a welcome message and an image.
- **About (`About.tsx`)**: Provides information about the services offered, along with an image and additional details.
- **Projects (`Projects.tsx`)**: Shows a list of projects, each with a name and score.
- **Contact (`Contact.tsx`)**: Contains a form for users to submit their contact information.
- **Header (`Header.tsx`)**: Includes navigation links to different pages.
- **Footer (`Footer.tsx`)**: Displays the copyright notice.

### Routing

- The application uses `BrowserRouter` and `Routes` from React Router to navigate between different pages.
- A 404 page is displayed for any undefined routes.

### Testing

- Unit tests are written for each component using React Testing Library.
- Tests include rendering components and checking for the presence of elements and navigation functionality.

## Setup and Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.

### Running the Application

1. After installing dependencies, start the application using `npm start`.
2. View the application in your browser at the address specified (usually `http://localhost:3000`).

### Running Tests

- Execute `npm test` to run the unit tests and see the test results in the terminal.

## Usage

### Navigation

- Use the navigation links in the Header to switch between Home, About, Projects, and Contact pages.
- The Footer is displayed on all pages with the current year.

### Interacting with the Contact Form

- In the Contact page, enter your name, email, and message, and click 'Submit!' to see an alert with the entered information.

## Note

- This application is a demonstration of creating a multi-page React application with routing and unit testing.
- It showcases the use of React Router for navigation between pages and React Testing Library for writing unit tests.
