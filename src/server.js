import { app } from "./app.js";
import process from "process";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Task Management API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
