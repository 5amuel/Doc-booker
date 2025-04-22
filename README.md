# doc-booker
DocBooking
DocBooking is a React + TypeScript application designed to streamline appointment booking with doctors. It features a clean UI, reusable components, and modern development tools like Vite and ESLint.

Setup Instructions
Prerequisites
Node.js (v16 or higher)
npm or yarn

Steps to Run the Project

Clone the repository:
```js
git clone https://github.com/your-username/doc-booker.git
cd doc-booking
```

Install dependencies:
```js
npm install
# or
yarn install
```
Start the development server:
```js
npm run dev
# or
yarn dev
```
Open the application in your browser:
```js
http://localhost:5173
```
To build the project for production:
```js
npm run build
# or
yarn build
```
To preview the production build:
```js
npm run preview
# or
yarn preview
```


How AI Tools Were Used
This project leveraged AI tools to:
 - Generate random images to be used as Mocked images in the project.
 - Create an array of Objects to be consumed in the project as Mocked data.

Known Limitations or Next Steps
Modal Behavior:
The modal may not close properly in certain edge cases. This requires further testing and debugging.
Date Validation:
The DatePicker component currently assumes a fixed range for "Next Week." Dynamic date ranges could be improved.
Styling:
Some components lack responsive design for smaller screens.


Next Steps
Enhance Accessibility:
 - Add more ARIA roles and keyboard navigation support for better usability.
Unit Testing:
 - Write unit tests for critical components like BookingModal and AppointmentsView.
Backend Integration:
 - Connect the application to a backend API for real-time appointment data.
Styling Improvements:
 - Use a CSS framework like Tailwind or Material-UI for consistent and responsive design.
Error Handling:
 - Add error messages for invalid inputs or failed API calls.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
