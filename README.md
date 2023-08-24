

# Random Password Generator App

A simple Random Password Generator application built using React and Vite. This app allows users to generate random passwords with various options and copy them to the clipboard. It also displays the last 5 generated passwords.

## Features

- Generate random passwords with options for including numbers, alphabets, and special characters.
- Copy generated passwords to the clipboard.
- Display the last 5 generated passwords.
- Previous passwords are persisted using local storage.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Ajay-Maury/Random-Password-Generator.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Random-Password-Generator
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:5173`.

## Usage

- Open the app in your browser.
- Customize password options by checking the corresponding checkboxes.
- Click the "Generate Password" button to generate a password.
- Click the "Copy to Clipboard" button to copy the generated password.
- The last 5 generated passwords will be displayed in the "Previous Passwords" section.

## Technologies Used

- React
- Vite (for fast development setup)
- `secure-random-password` library (for password generation)
- `clipboard-copy` library (for copying to clipboard)
- Local Storage (for storing previous passwords)
