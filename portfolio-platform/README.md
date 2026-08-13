# Portfolio Platform

A responsive **Single Page Application (SPA)** built with **React** and **Vite** that allows users to showcase projects, search through them, and dynamically add new portfolio items.

---

## Project Description

The Portfolio Platform is a modern React application developed as part of a summative lab. It demonstrates React fundamentals such as reusable components, state management, props, event handling, responsive design, and unit testing.

Users can:

- View a collection of portfolio projects.
- Search for projects by title or category.
- Add new projects dynamically through a form.
- Browse projects in a clean and responsive interface.

---

## Features

- Responsive portfolio landing page
- Reusable React components
- Project cards
- Dynamic project search
- Add new project form
- Form validation
- Responsive design
- Component-based architecture
- Unit tests using Jest
- React Testing Library

---

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Jest
- React Testing Library
- Git
- GitHub

---

## Project Structure

```text
portfolio-platform/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ProjectForm.jsx
│   ├── tests/
│   │   ├── ProjectCard.test.jsx
│   │   ├── ProjectForm.test.jsx
│   │   ├── SearchBar.test.jsx
│   │   └── setup.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── babel.config.cjs
├── jest.config.cjs
├── package.json
├── README.md
└── vite.config.js
```

---

## Component Hierarchy

```text
App
├── Header
├── Hero
├── SearchBar
├── ProjectList
│   └── ProjectCard
└── ProjectForm
```

---

## Installation

1. Clone the repository.

```bash
git clone https://github.com/yourusername/portfolio-platform.git
```

2. Navigate to the project folder.

```bash
cd portfolio-platform
```

3. Install dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

The application will open in your browser.

---

## Running Tests

Run the Jest test suite using:

```bash
npm test
```

---

## Future Improvements

- Edit existing projects
- Delete projects
- Store data using a backend API
- Add project categories and filters
- Dark mode support
- Project details page

---

## Known Limitations

- Data is stored only during the current session.
- No backend database integration.
- No user authentication.

---

## Author

**Rachel Angela Gathoni Kanyoro**

Software Development Student  
Nairobi, Kenya

GitHub: peshky38-sketch rachel codes

---

## License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project with proper attribution.

---

## Copyright

© 2026 Rachel Angela Gathoni Kanyoro. All Rights Reserved.
