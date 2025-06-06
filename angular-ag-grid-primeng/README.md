# Angular AG-Grid and PrimeNG Application

This project is an Angular application demonstrating the use of AG-Grid for data tables and PrimeNG for UI components and styling.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

*   [Node.js](https://nodejs.org/) (which includes npm) - Version 20.x or later recommended.
*   [Angular CLI](https://angular.io/cli) - Latest version recommended. Install globally using `npm install -g @angular/cli`.

### Installation

1.  Clone the repository (or download the source code).
2.  Navigate to the project directory: `cd angular-ag-grid-primeng`
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  After installation, run the development server:
    ```bash
    ng serve
    ```
2.  Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features

The application currently includes the following features:

*   **Header**: A simple application header.
*   **Controls Bar**:
    *   A PrimeNG **ToggleButton**.
    *   A PrimeNG **Calendar** for date range selection.
*   **Data Table**:
    *   An **AG-Grid** table displaying sample data.
    *   Basic column definitions for 'Make', 'Model', and 'Price'.
*   **Action Buttons**:
    *   PrimeNG **Buttons** for actions like "Export" and "Refresh".

## Technologies Used

*   **Angular**: Frontend framework.
*   **AG-Grid**: High-performance data grid.
*   **PrimeNG**: Rich set of UI components for Angular.
*   **PrimeIcons**: Icon library for PrimeNG.
*   **SCSS**: CSS preprocessor.
