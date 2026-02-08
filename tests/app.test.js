import request from "supertest";
import { app } from "../src/app.js";

describe("Task Management API", () => {
  describe("GET /health", () => {
    it("should return health status", async () => {
      const res = await request(app).get("/health");
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("healthy");
      expect(res.body).toHaveProperty("timestamp");
      expect(res.body.version).toBe("1.0.0");
    });
  });

  describe("POST /tasks", () => {
    it("should create a new task", async () => {
      const res = await request(app)
        .post("/tasks")
        .send({ title: "Test Task", description: "Test Description" });

      expect(res.status).toBe(201);
      expect(res.body.title).toBe("Test Task");
      expect(res.body.description).toBe("Test Description");
      expect(res.body.completed).toBe(false);
      expect(res.body).toHaveProperty("id");
    });

    it("should return 400 if title is missing", async () => {
      const res = await request(app).post("/tasks").send({});

      expect(res.status).toBe(400);
      expect(res.body.error).toBe("Title is required");
    });
  });

  describe("GET /tasks", () => {
    it("should return all tasks", async () => {
      await request(app).post("/tasks").send({ title: "Task 1" });
      await request(app).post("/tasks").send({ title: "Task 2" });

      const res = await request(app).get("/tasks");
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("GET /tasks/:id", () => {
    it("should return a specific task", async () => {
      const createRes = await request(app)
        .post("/tasks")
        .send({ title: "Test Task" });

      const taskId = createRes.body.id;
      const res = await request(app).get(`/tasks/${taskId}`);

      expect(res.status).toBe(200);
      expect(res.body.title).toBe("Test Task");
    });

    it("should return 404 for nonexistent task", async () => {
      const res = await request(app).get("/tasks/999");
      expect(res.status).toBe(404);
    });
  });

  describe("PUT /tasks/:id", () => {
    it("should update a task", async () => {
      const createRes = await request(app)
        .post("/tasks")
        .send({ title: "Original" });

      const taskId = createRes.body.id;
      const res = await request(app)
        .put(`/tasks/${taskId}`)
        .send({ title: "Updated", description: "New description" });

      expect(res.status).toBe(200);
      expect(res.body.title).toBe("Updated");
      expect(res.body.description).toBe("New description");
    });

    it("should return 404 for nonexistent task", async () => {
      const res = await request(app)
        .put("/tasks/999")
        .send({ title: "Updated" });

      expect(res.status).toBe(404);
    });
  });

  // describe("DELETE /tasks/:id", () => {
  //   it("should delete a task", async () => {
  //     const createRes = await request(app)
  //       .post("/tasks")
  //       .send({ title: "To Delete" });

  //     const taskId = createRes.body.id;
  //     const deleteRes = await request(app).delete(`/tasks/${taskId}`);
  //     expect(deleteRes.status).toBe(204);

  //     const getRes = await request(app).get(`/tasks/${taskId}`);
  //     expect(getRes.status).toBe(404);
  //   });

  //   it("should return 404 for nonexistent task", async () => {
  //     const res = await request(app).delete("/tasks/999");
  //     expect(res.status).toBe(404);
  //   });
  // });

  // describe("PATCH /tasks/:id/complete", () => {
  //   it("should toggle task completion", async () => {
  //     const createRes = await request(app)
  //       .post("/tasks")
  //       .send({ title: "Test Task" });

  //     const taskId = createRes.body.id;
  //     const res = await request(app).patch(`/tasks/${taskId}/complete`);

  //     expect(res.status).toBe(200);
  //     expect(res.body.completed).toBe(true);
  //   });

  //   it("should return 404 for nonexistent task", async () => {
  //     const res = await request(app).patch("/tasks/999/complete");
  //     expect(res.status).toBe(404);
  //   });
  // });

  // describe("GET /tasks?status=", () => {
  //   it("should filter tasks by status", async () => {
  //     const task1 = await request(app).post("/tasks").send({ title: "Task 1" });
  //     const task2 = await request(app).post("/tasks").send({ title: "Task 2" });

  //     await request(app).patch(`/tasks/${task2.body.id}/complete`);

  //     const completedRes = await request(app).get("/tasks?status=completed");
  //     expect(completedRes.status).toBe(200);
  //     expect(completedRes.body.some((t) => t.completed)).toBe(true);

  //     const activeRes = await request(app).get("/tasks?status=active");
  //     expect(activeRes.status).toBe(200);
  //     expect(activeRes.body.every((t) => !t.completed)).toBe(true);
  //   });
  // });
});
