# Product Backlog

## Product Vision
A lightweight REST API that enables users to create, manage, and track tasks efficiently, helping individuals organize their daily work and boost productivity.

---

## User Stories

### Story 1: Create a Task (HIGH PRIORITY)
**As a** user  
**I want to** create a task with a title and description  
**So that** I can track work that needs to be done

**Acceptance Criteria:**
- Given I provide a task title
- When I submit a POST request to /tasks
- Then a new task is created with a unique ID
- And the task is saved with the provided title and description
- And I receive a 201 status code with the task details
- And the task is marked as incomplete by default

**Story Points:** 3  
**Priority:** High  
**Sprint:** Sprint 1

---

### Story 2: View All Tasks (HIGH PRIORITY)
**As a** user  
**I want to** view all my tasks  
**So that** I can see what work needs to be done

**Acceptance Criteria:**
- Given I have created tasks
- When I send a GET request to /tasks
- Then I receive a list of all tasks
- And each task includes id, title, description, and completion status
- And I receive a 200 status code

**Story Points:** 2  
**Priority:** High  
**Sprint:** Sprint 1

---

### Story 3: Update a Task (MEDIUM PRIORITY)
**As a** user  
**I want to** update a task's title or description  
**So that** I can modify task details as requirements change

**Acceptance Criteria:**
- Given a task exists with a specific ID
- When I send a PUT request to /tasks/:id with updated data
- Then the task is updated with the new information
- And I receive a 200 status code with the updated task
- And if the task doesn't exist, I receive a 404 status code

**Story Points:** 3  
**Priority:** Medium  
**Sprint:** Sprint 2

---

### Story 4: Delete a Task (MEDIUM PRIORITY)
**As a** user  
**I want to** delete a task  
**So that** I can remove tasks that are no longer needed

**Acceptance Criteria:**
- Given a task exists with a specific ID
- When I send a DELETE request to /tasks/:id
- Then the task is removed from the system
- And I receive a 204 status code
- And if the task doesn't exist, I receive a 404 status code

**Story Points:** 2  
**Priority:** Medium  
**Sprint:** Sprint 2

---

### Story 5: Mark Task as Complete (HIGH PRIORITY)
**As a** user  
**I want to** mark a task as complete or incomplete  
**So that** I can track my progress

**Acceptance Criteria:**
- Given a task exists with a specific ID
- When I send a PATCH request to /tasks/:id/complete
- Then the task's completion status is toggled
- And I receive a 200 status code with the updated task
- And if the task doesn't exist, I receive a 404 status code

**Story Points:** 2  
**Priority:** High  
**Sprint:** Sprint 1

---

### Story 6: Filter Tasks by Status (LOW PRIORITY)
**As a** user  
**I want to** filter tasks by completion status  
**So that** I can focus on active or completed work

**Acceptance Criteria:**
- Given I have tasks with different completion statuses
- When I send a GET request to /tasks?status=completed
- Then I receive only completed tasks
- When I send a GET request to /tasks?status=active
- Then I receive only incomplete tasks
- And I receive a 200 status code

**Story Points:** 2  
**Priority:** Low  
**Sprint:** Sprint 2

---

### Story 7: Health Check Endpoint (HIGH PRIORITY)
**As a** DevOps engineer  
**I want to** have a health check endpoint  
**So that** I can monitor the service availability

**Acceptance Criteria:**
- Given the service is running
- When I send a GET request to /health
- Then I receive a 200 status code
- And the response includes status, timestamp, and version
- And the response indicates the service is healthy

**Story Points:** 1  
**Priority:** High  
**Sprint:** Sprint 1

---

## Backlog Summary

| Story | Title | Priority | Story Points | Sprint |
|-------|-------|----------|--------------|--------|
| 1 | Create a Task | High | 3 | Sprint 1 |
| 2 | View All Tasks | High | 2 | Sprint 1 |
| 7 | Health Check Endpoint | High | 1 | Sprint 1 |
| 5 | Mark Task as Complete | High | 2 | Sprint 1 |
| 3 | Update a Task | Medium | 3 | Sprint 2 |
| 4 | Delete a Task | Medium | 2 | Sprint 2 |
| 6 | Filter Tasks by Status | Low | 2 | Sprint 2 |

**Total Story Points:** 15
