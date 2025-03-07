# React + TypeScript + Vite Boilerplate

This is a **starter template** 100% developed by @plucasr for building modern web applications using **React**, **TypeScript**, **Vite**, **React Router**, **Redux**, **Tailwind CSS**, and **Cypress** for end-to-end testing. It is designed to be an **easy-to-start boilerplate** with all the essential configurations and features pre-setup, so you can focus on building your application.

## Features

- **Vite**: Fast and modern build tool for React applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better developer experience and code quality.
- **React Router**: Handles routing and navigation in the app, including nested routes (e.g., `auth/login`, `auth/signup`).
- **Redux**: State management library with an initial setup for `loading` and `auth` slices.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Cypress**: End-to-end testing framework for testing your application's functionality.
- **Nested Routes**: Example of nested routes for authentication (`auth/login`, `auth/signup`).

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed (v16 or higher recommended).
- **npm** or **yarn**: Package managers for installing dependencies.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be running at `http://localhost:5173`.

---

## Project Structure

Here’s an overview of the project structure:

```
src/
├── components/          # Reusable components (e.g., EmailInput, LoginForm)
├── hooks/               # Custom hooks (e.g., useLoading, useAuth)
├── pages/               # Page components (e.g., Home, About, Auth)
├── redux/               # Redux slices and store configuration
│   ├── authSlice.ts     # Auth-related state (e.g., token)
│   ├── applicationSlice.ts # Application state (e.g., loading, toast messages)
│   ├── store.ts         # Redux store configuration
├── routes/              # React Router configuration
│   ├── AppRoutes.tsx    # Main routing logic
├── cypress/             # Cypress end-to-end tests
│   ├── e2e/             # Test files
├── App.tsx              # Main application component
├── main.tsx             # Entry point for the app
```

---

## Key Features Explained

### 1. **React Router with Nested Routes**
The app includes an example of nested routes for authentication:
- `/auth`: Parent route for authentication.
- `/auth/login`: Login page.
- `/auth/signup`: Signup page.

Example:
```tsx
<Route path="auth" element={<AuthLayout />}>
  <Route index element={<Login />} />
  <Route path="login" element={<Login />} />
  <Route path="signup" element={<SignUp />} />
</Route>
```

---

### 2. **Redux Setup**
The project includes a basic Redux setup with two slices:
- **`authSlice`**: Manages the authentication token.
- **`applicationSlice`**: Manages the `loading` state and toast messages.

Example:
```ts
const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
```

---

### 3. **Tailwind CSS**
Tailwind CSS is pre-configured for rapid UI development. You can use utility classes directly in your components.

Example:
```tsx
<div className="bg-gray-50 p-4 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Hello, World!</h1>
</div>
```

---

### 4. **Cypress for End-to-End Testing**
Cypress is set up for end-to-end testing. You can find test files in the `cypress/e2e` directory.

To run Cypress tests:
```bash
npm run cypress:open
# or
yarn cypress:open
```

Example test:
```js
describe("Login Page", () => {
  it("should display the login form", () => {
    cy.visit("/auth/login");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='password']").should("exist");
  });
});
```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run cypress:open`**: Open Cypress for end-to-end testing.
- **`npm run lint`**: Run ESLint to check for code issues.

---

## Customization

- **Add New Pages**: Create new components in the `src/pages` directory and add routes in `src/routes/AppRoutes.tsx`.
- **Add New Redux Slices**: Create new slices in the `src/redux` directory and add them to the store.
- **Add New Tests**: Add new test files in the `cypress/e2e` directory.

---

## Why Use This Boilerplate?

- **Quick Start**: All the essential tools and configurations are pre-setup, so you can start coding immediately.
- **Best Practices**: Follows modern React and TypeScript best practices.
- **Scalable**: Designed to be scalable for larger applications.
- **Testing Ready**: Includes Cypress for end-to-end testing.

---

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy building your app with this boilerplate! 🚀

---

Let me know if you need further adjustments or additional details! 😊