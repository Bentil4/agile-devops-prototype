# Quick Start Guide - Node.js + Express

## ✅ What's Been Set Up

Your complete Agile DevOps prototype is ready with Node.js + Express!

### 📁 Project Structure
```
agile-devops-prototype/
├── src/
│   ├── app.js                 # Express REST API (all endpoints)
│   ├── models.js              # TaskManager with in-memory storage
│   └── server.js              # Server entry point
├── tests/
│   └── app.test.js            # Complete test suite (11 tests)
├── docs/
│   ├── backlog.md             # 7 user stories
│   ├── definition-of-done.md  # DoD checklist
│   ├── sprint0-plan.md        # Planning sprint
│   ├── sprint1-plan.md        # Sprint 1 (8 points)
│   ├── sprint2-plan.md        # Sprint 2 (7 points)
│   ├── sprint1-review.md      # Template
│   ├── sprint2-review.md      # Template
│   ├── sprint1-retrospective.md # Template
│   └── sprint2-retrospective.md # Template
├── .github/workflows/
│   └── ci.yml                 # GitHub Actions CI/CD
├── package.json               # Node.js dependencies
├── .gitignore
└── README.md
```

---

## 🚀 Next Steps (In Order)

### Step 1: Initialize Git Repository
```bash
cd "/Users/macbook/Amalitech Projects/agile-devops-prototype"
git init
git add .
git commit -m "Initial project setup - Sprint 0 complete"
```

### Step 2: Create GitHub Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name it: `agile-devops-prototype`
4. Don't initialize with README
5. Create repository

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/agile-devops-prototype.git
git branch -M main
git push -u origin main
```

### Step 4: Create Develop Branch
```bash
git checkout -b develop
git push -u origin develop
```

### Step 5: Install Dependencies
```bash
npm install
```

### Step 6: Run Tests Locally
```bash
npm test
```

Expected: All 11 tests should pass

### Step 7: Run with Coverage
```bash
npm run test:coverage
```

Expected: >80% coverage

### Step 8: Run the Application
```bash
npm start
```

### Step 9: Test the API
```bash
# In another terminal
curl http://localhost:3000/health
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"My First Task"}'
curl http://localhost:3000/tasks
```

---

## 📝 Sprint 1 Execution Plan

### Day 1: Setup & Verification
1. ✅ Initialize Git
2. ✅ Install dependencies: `npm install`
3. ✅ Run tests: `npm test`
4. ✅ Verify all tests pass
5. Commit: "Verify project setup and tests"

### Day 2: GitHub & CI/CD
1. Create GitHub repository
2. Push code to GitHub
3. Verify CI/CD pipeline runs
4. Take screenshots of pipeline
5. Commit: "Set up CI/CD pipeline"

### Day 3: Testing & Documentation
1. Test all endpoints manually
2. Take screenshots of API responses
3. Document any issues found
4. Commit: "Complete endpoint testing"

### Day 4: Sprint Review & Retrospective
1. Fill in `docs/sprint1-review.md`
2. Fill in `docs/sprint1-retrospective.md`
3. Identify 2 specific improvements
4. Commit: "Complete Sprint 1 review and retrospective"

---

## 📝 Sprint 2 Execution Plan

### Day 1: Apply Improvements
1. Review Sprint 1 retrospective
2. Implement identified improvements
3. Commit changes with clear messages
4. Commit: "Apply Sprint 1 improvements"

### Day 2: Enhanced Features
1. Add logging to all endpoints
2. Enhance health endpoint
3. Test all features
4. Commit: "Add logging and monitoring"

### Day 3: Final Testing
1. Run full test suite
2. Verify CI/CD pipeline
3. Test all endpoints
4. Take final screenshots

### Day 4: Final Documentation
1. Fill in `docs/sprint2-review.md`
2. Fill in `docs/sprint2-retrospective.md`
3. Update README if needed
4. Commit: "Complete Sprint 2 and final retrospective"

---

## 🧪 Available NPM Scripts

```bash
npm start              # Start the server
npm run dev            # Start with auto-reload (nodemon)
npm test               # Run tests
npm run test:coverage  # Run tests with coverage
npm run test:watch     # Run tests in watch mode
```

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Health check |
| POST | /tasks | Create task |
| GET | /tasks | Get all tasks |
| GET | /tasks?status=completed | Get completed |
| GET | /tasks?status=active | Get active |
| GET | /tasks/:id | Get specific task |
| PUT | /tasks/:id | Update task |
| DELETE | /tasks/:id | Delete task |
| PATCH | /tasks/:id/complete | Toggle completion |

---

## 💡 Commit Strategy

Use this format for commits:
```
[Story-X] Description

- Detail 1
- Detail 2
```

Examples:
```
[Story-7] Add health check endpoint

- Implement GET /health
- Return status, timestamp, version
- Add test for health endpoint

[Story-1] Add create task endpoint

- Implement POST /tasks
- Validate title is required
- Return 201 with created task
- Add tests for success and error cases
```

---

## 🎯 Success Checklist

### Before Sprint 1 Ends
- [ ] All 4 stories completed
- [ ] All tests passing
- [ ] CI/CD pipeline running
- [ ] Screenshots captured
- [ ] Sprint 1 review written
- [ ] Sprint 1 retrospective written
- [ ] 2+ improvements identified

### Before Sprint 2 Ends
- [ ] All 3 stories completed
- [ ] Improvements from Sprint 1 applied
- [ ] Logging added
- [ ] All tests passing
- [ ] CI/CD pipeline running
- [ ] Screenshots captured
- [ ] Sprint 2 review written
- [ ] Final retrospective written

---

## 🆘 Troubleshooting

### Tests Failing?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm test
```

### Port Already in Use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm start
```

### CI/CD Not Running?
- Check GitHub Actions tab
- Ensure pushed to main or develop
- Check `.github/workflows/ci.yml` syntax

---

## ✨ You're Ready!

Start with Step 1 and work through systematically. Good luck!
