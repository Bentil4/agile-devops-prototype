import express from 'express';
import { TaskManager } from './models.js';

export const app = express();
app.use(express.json());

const taskManager = new TaskManager();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const task = taskManager.createTask(title, description || '');
  res.status(201).json(task);
});

app.get('/tasks', (req, res) => {
  const { status } = req.query;
  const tasks = taskManager.getAllTasks(status);
  res.status(200).json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = taskManager.getTask(parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.status(200).json(task);
});

// app.put('/tasks/:id', (req, res) => {
//   const task = taskManager.updateTask(parseInt(req.params.id), req.body);
//   if (!task) {
//     return res.status(404).json({ error: 'Task not found' });
//   }
//   res.status(200).json(task);
// });

// app.delete('/tasks/:id', (req, res) => {
//   const success = taskManager.deleteTask(parseInt(req.params.id));
//   if (!success) {
//     return res.status(404).json({ error: 'Task not found' });
//   }
//   res.status(204).send();
// });

// app.patch('/tasks/:id/complete', (req, res) => {
//   const task = taskManager.toggleComplete(parseInt(req.params.id));
//   if (!task) {
//     return res.status(404).json({ error: 'Task not found' });
//   }
//   res.status(200).json(task);
// });

