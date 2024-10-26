# TODO App

A simple TODO app built using modern web technologies and following best practices like SOLID principles and Test-Driven Development (TDD).

---

## Tech Stack:

- **Frontend:** TypeScript, React, NEXT.js, React-query
- **Backend:** Drizzle ORM, PostgreSQL
- **Testing:** Jest, React-testing-library, Cypress
- **CI/CD:** GitHub Actions
- **Containerization:** Docker, docker-compose

---

## Project Setup Instructions

### 1. Prerequisites

- Docker: Install Docker and Docker Compose on your system.
- Node.js: Ensure Node.js (v16 or higher) is installed.
- PostgreSQL: Install PostgreSQL if not using Docker for the database.

### 2. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 3. Environment Variables

Create a `.env` file in the root directory with the following:

```bash
DATABASE_URL=postgres://user:password@localhost:5432/tododb
```

### 4. Setup Docker and Database

Build and run the containers:

```bash
docker-compose up --build
```

This will:

- Start the PostgreSQL database.
- Launch the Next.js app with React in development mode.

To check database connection:

```bash
docker exec -it todo-app_db psql -U user -d tododb
```

### 5. Install Dependencies

```bash
npm install
```

### 6. Run Migrations

Use Drizzle ORM for migrations:

```bash
npm run migrate
```

### 7. Run the Development Server

```bash
npm run dev
```

App should now be running at `http://localhost:3000`.

### 8. Testing

- **Unit Tests:** Run with Jest and React-testing-library.

```bash
npm run test
```

- **End-to-End Tests:** Use Cypress.

```bash
npm run cypress
```

### 9. Storybook

To run Storybook for UI component testing:

```bash
npm run storybook
```

### 10. Deployment

For deployment, you can set up CI/CD with GitHub Actions by configuring the `.github/workflows/ci.yml` file.
