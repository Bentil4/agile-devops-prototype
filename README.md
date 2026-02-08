# Task Management API

## Product Vision

A lightweight REST API that enables users to create, manage, and track tasks efficiently, helping individuals organize their daily work and boost productivity.

## Features

- Create tasks with title and description
- View all tasks
- Update task details
- Delete tasks
- Mark tasks as complete/incomplete
- Filter tasks by status
- Health monitoring endpoint

## Tech Stack

- Node.js 18+
- Express (REST API)
- Jest (Testing)
- GitHub Actions (CI/CD)

## Setup Instructions

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Bentil4/agile-devops-prototype.git
cd agile-devops-prototype

# Install dependencies
npm install
```

### Running the Application

```bash
npm start
```

The API will be available at `http://localhost:3000`

### Running Tests

```bash
npm test
```

### Running with Coverage

```bash
npm run test:coverage
```

## API Endpoints

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| GET    | /health                 | Health check endpoint  |
| POST   | /tasks                  | Create a new task      |
| GET    | /tasks                  | Get all tasks          |
| GET    | /tasks?status=completed | Get completed tasks    |
| GET    | /tasks?status=active    | Get active tasks       |
| GET    | /tasks/:id              | Get a specific task    |
| PUT    | /tasks/:id              | Update a task          |
| DELETE | /tasks/:id              | Delete a task          |
| PATCH  | /tasks/:id/complete     | Toggle task completion |

## Example Usage

### Create a task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "My Task", "description": "Task description"}'
```

### Get all tasks

```bash
curl http://localhost:3000/tasks
```

### Mark task as complete

```bash
curl -X PATCH http://localhost:3000/tasks/1/complete
```

## Documentation

- [Product Backlog](docs/backlog.md)
- [Sprint 0 Plan](docs/sprint0-plan.md)
- [Sprint 1 Plan](docs/sprint1-plan.md)
- [Sprint 2 Plan](docs/sprint2-plan.md)
- [Definition of Done](docs/definition-of-done.md)

## Project Structure

```
agile-devops-prototype/
├── src/
│   ├── app.js             # Main Express application
│   ├── models.js          # TaskManager data model
│   └── server.js          # Server entry point
├── tests/                 # Test files
│   └── app.test.js
├── docs/                  # Documentation
│   ├── backlog.md
│   ├── definition-of-done.md
│   ├── sprint0-plan.md
│   ├── sprint1-plan.md
│   └── sprint2-plan.md
├── .github/workflows/     # CI/CD configuration
│   └── ci.yml
├── package.json           # Node.js dependencies
├── .gitignore
└── README.md
```

## Agile & DevOps Practices

This project demonstrates:

- **Agile Planning:** Sprint planning with user stories and story points
- **Version Control:** Git with meaningful commit history
- **CI/CD:** Automated testing and health checks via GitHub Actions
- **Testing:** Comprehensive unit tests with coverage reporting
- **Monitoring:** Health endpoint for service availability
- **Iterative Delivery:** Two-sprint incremental development
