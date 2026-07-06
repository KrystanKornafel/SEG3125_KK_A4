Description: This code was written by Krystan Kornafel for Assignment 4. The purpose of this assignment was to design and implement a website UI for a memory game webiste. The description of the UI is presented below.

Flow of the UI:
1. Select items and add to cart
2. Check out
3. Enter payment information
4. Enter contact information
5. Optional: Enter survey
6. Return to main page

GenAI Acknowledgement: Some of my images were created by Copilot and Gemini. My timer was created by ChatGPT for the purpose of setting and displaying time. If I reference GenAI for a line of code, I made sure to add a comment to give proper acknowledgment of the resource.

My work can be found in the following folders:
1. /public -> This is where all the card UIs are stored, such as Hairdresser, MemoryGame, EccommerceStore, and Analytics
2. /public/eCommerce -> This is where all the code for the e-commerce UI will be stored
3. /src -> This is where the main UI is stored/accessed (App.jsx, main.jsx)

To run in VS Code, simply run the following commands:
1. npm install 
2. npm create vite
3. npm run dev

Aside:
You may also need to install the following packages to make this application work:
1. npm install react-bootstrap



Additional Notes:
==================
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
