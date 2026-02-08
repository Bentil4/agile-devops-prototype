export class TaskManager {
  constructor() {
    this.tasks = {};
    this.nextId = 1;
  }

  createTask(title, description = '') {
    const task = {
      id: this.nextId,
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    this.tasks[this.nextId] = task;
    this.nextId++;
    return task;
  }

  // getAllTasks(status) {
  //   const tasks = Object.values(this.tasks);
  //   if (status === 'completed') {
  //     return tasks.filter(t => t.completed);
  //   } else if (status === 'active') {
  //     return tasks.filter(t => !t.completed);
  //   }
  //   return tasks;
  // }

  // getTask(taskId) {
  //   return this.tasks[taskId] || null;
  // }

  // updateTask(taskId, data) {
  //   const task = this.tasks[taskId];
  //   if (!task) return null;

  //   if (data.title !== undefined) task.title = data.title;
  //   if (data.description !== undefined) task.description = data.description;
  //   if (data.completed !== undefined) task.completed = data.completed;

  //   return task;
  // }

  // deleteTask(taskId) {
  //   if (this.tasks[taskId]) {
  //     delete this.tasks[taskId];
  //     return true;
  //   }
  //   return false;
  // }

  // toggleComplete(taskId) {
  //   const task = this.tasks[taskId];
  //   if (!task) return null;
  //   task.completed = !task.completed;
  //   return task;
  // }
}
