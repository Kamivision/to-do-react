# To-Do List App with React

## Introduction

In this assignment, you will create a To-Do List web application using React. The goal is to develop a basic To-Do List app that allows users to add, complete, and delete tasks. This project is designed for beginners who are new to React and will help you learn the basics of setting up a React environment and managing the state of dynamic task lists.

## Assignment Tasks

### Task 1: Setup Your React Environment (5 points)

1. Set up your development environment for React. You can use Create React App, which simplifies the setup process, or choose your own preferred method.

2. Create a new React project for the To-Do List app following the provided setup guide or tutorial.

### Task 2: Create the User Interface (10 points)

1. Design the user interface for the To-Do List app. Create the following components within your React project:

   - A component that displays the title of the app, e.g., "My To-Do List."
   - A simple input field for entering new tasks.
   - A list of tasks displayed as text items. Initially, the list can be empty.

2. Apply basic styling to the user interface to make it clear and user-friendly. You can use inline styles or simple CSS.

### Task 3: Implement Task Management (15 points)

1. Implement the functionality to add tasks to the task list. Users should be able to enter a task description and click a button to add it to the list.

2. Implement the functionality to mark a task as completed. When a user clicks on a task, it should change its appearance to indicate completion.

3. Implement the functionality to delete a task. Provide a button or icon next to each task that allows users to delete a task when clicked.

## Additional Tips

- For styling, you can use basic CSS or inline styles directly within your React components.
- Keep your code simple and well-commented, as this assignment is intended for beginners.
- Don't worry about advanced concepts like React hooks or component separation; focus on building a functional To-Do List app to practice the basics.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
